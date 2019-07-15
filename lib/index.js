import hyper from 'react-hyperscript';

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

hyper.if = applyIf(hyper);

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
export { hyperIf, hyperStyled };
