import { objectSpread2 as _objectSpread2 } from './_virtual/_rollupPluginBabelHelpers.js';
import h from 'react-hyperscript';
export { C, compose } from './compose.js';
export { addClassNames, classed } from './classed.js';

var hyper_ = function hyper_() {
  return h.apply(void 0, arguments);
};

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

var hyper = applyIf(hyper_);

hyper.styled = function (styles) {
  var h = function h() {
    var el = hyper.apply(this, arguments);
    var props = el.props;
    var className = props.className;

    if (className == null) {
      return el;
    }

    var hasChanges = false;
    var newClasses = className.split(" ").map(function (d) {
      if (d in styles) {
        hasChanges = true;
        return styles[d];
      }

      return d;
    });

    if (!hasChanges) {
      return el;
    } // Create a new react element with local style substitutions


    return _objectSpread2(_objectSpread2({}, el), {}, {
      props: _objectSpread2(_objectSpread2({}, props), {}, {
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
//# sourceMappingURL=index.js.map
