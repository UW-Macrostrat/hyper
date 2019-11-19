import hyper from 'react-hyperscript';
import classNames from 'classnames';

var compose;

compose = function(...components) {
  return function(props) {
    var c, child, rest;
    ({
      // Compose a series of react components
      children: child,
      ...rest
    } = props);
    child = hyper(components.pop(), props);
    while ((c = components.pop()) != null) {
      child = hyper(c, null, child);
    }
    return child;
  };
};

var addClassNames, classed;

addClassNames = function(props, addedClassNames) {
  var className, rest;
  ({className, ...rest} = props);
  className = classNames(className, addedClassNames);
  return {className, ...rest};
};

classed = function(component, addedClassNames) {
  return function(props) {
    var newProps;
    newProps = addClassNames(props, addedClassNames);
    return hyper(component, newProps);
  };
};

var applyIf, hyperIf, hyperStyled;

applyIf = function(h) {
  h.if = function(v) {
    // Only renders component if condition is met
    if (v) {
      return h;
    } else {
      return function() {
        return null;
      };
    }
  };
  return h;
};

applyIf(hyper);

hyper.styled = function(styles) {
  var h;
  h = function() {
    var el, hasChanges, newClasses, props;
    el = hyper.apply(this, arguments);
    ({props} = el);
    if (!("className" in props)) {
      return el;
    }
    hasChanges = false;
    newClasses = props.className.split(" ").map(function(d) {
      if (d in styles) {
        hasChanges = true;
        return styles[d];
      }
      return d;
    });
    if (!hasChanges) {
      return el;
    }
    return {
      // Create a new react element with local style substitutions
      ...el,
      props: {
        ...props,
        className: newClasses.join(" ")
      }
    };
  };
  return applyIf(h);
};

hyperIf = hyper.if;

hyperStyled = hyper.styled;

export default hyper;
export { addClassNames, applyIf, classed, compose, hyperIf, hyperStyled };
