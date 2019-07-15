'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var hyper = _interopDefault(require('react-hyperscript'));

var applyIf;

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

exports.hyperIf = hyper.if;

exports.hyperStyled = hyper.styled;

exports.default = hyper;
