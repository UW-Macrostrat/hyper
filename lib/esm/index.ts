import { objectSpread2 as _objectSpread2 } from './_virtual/_rollupPluginBabelHelpers.js';
import h from 'react-hyperscript';
export { C, compose } from './compose.ts';
export { addClassNames, classed } from './classed.ts';

var hyper = function hyper() {
  return h.apply(void 0, arguments);
};

hyper["if"] = null;

var applyIf = function applyIf(h) {
  h["if"] = function (v) {
    // Only renders component if condition is met
    if (v) {
      return h;
    } else {
      return function () {
        return null;
      };
    }
  };

  return h;
};

applyIf(hyper);

hyper.styled = function (styles) {
  var h = function h() {
    var el = hyper.apply(this, arguments);
    var props = el.props;

    if (!("className" in props)) {
      return el;
    }

    var hasChanges = false;
    var newClasses = props.className.split(" ").map(function (d) {
      if (d in styles) {
        hasChanges = true;
        return styles[d];
      }

      return d;
    });

    if (!hasChanges) {
      return el;
    } // Create a new react element with local style substitutions


    return _objectSpread2({}, el, {
      props: _objectSpread2({}, props, {
        className: newClasses.join(" ")
      })
    });
  };

  return applyIf(h);
};

var hyperIf = hyper["if"];
var hyperStyled = hyper.styled;

export default hyper;
export { applyIf, hyperIf, hyperStyled };
//# sourceMappingURL=index.ts.map
