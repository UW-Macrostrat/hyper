'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var hyper = _interopDefault(require('react-hyperscript'));
var classNames = _interopDefault(require('classnames'));

exports.compose = function(...args) {
  return function(props) {
    var c, child, components, rest;
    components = [...args];
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

exports.addClassNames = function(props, addedClassNames) {
  var className, rest;
  ({className, ...rest} = props);
  className = classNames(className, addedClassNames);
  return {className, ...rest};
};

exports.classed = function(component, addedClassNames) {
  return function(props) {
    var newProps;
    newProps = exports.addClassNames(props, addedClassNames);
    return hyper(component, newProps);
  };
};

exports.applyIf = function(h) {
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

exports.applyIf(hyper);

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
  return exports.applyIf(h);
};

exports.hyperIf = hyper.if;

exports.hyperStyled = hyper.styled;

exports.default = hyper;
