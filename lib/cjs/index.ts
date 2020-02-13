'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./_virtual/_rollupPluginBabelHelpers.js');
var h = _interopDefault(require('react-hyperscript'));
var __chunk_2 = require('./compose.ts');
var __chunk_3 = require('./classed.ts');

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


    return __chunk_1.objectSpread2({}, el, {
      props: __chunk_1.objectSpread2({}, props, {
        className: newClasses.join(" ")
      })
    });
  };

  return applyIf(h);
};

var hyperIf = hyper["if"];
var hyperStyled = hyper.styled;

exports.C = __chunk_2.C;
exports.compose = __chunk_2.compose;
exports.addClassNames = __chunk_3.addClassNames;
exports.classed = __chunk_3.classed;
exports.applyIf = applyIf;
exports.default = hyper;
exports.hyperIf = hyperIf;
exports.hyperStyled = hyperStyled;
//# sourceMappingURL=index.ts.map
