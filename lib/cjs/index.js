'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var h = require('react-hyperscript');
var compose = require('./compose.js');
var classed = require('./classed.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var h__default = /*#__PURE__*/_interopDefaultLegacy(h);

function createHyperElement(el) {
  // @ts-ignore
  el.isReactElement = true;
  return el;
}

var hyper_ = function hyper_() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 2 && args[1].isReactElement) {
    // Special case where a single child element is passed
    return createHyperElement(h__default["default"](args[0], null, args[1]));
  }

  return createHyperElement(h__default["default"].apply(void 0, args));
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


    return _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, el), {}, {
      props: _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, props), {}, {
        className: newClasses.join(" ")
      })
    });
  };

  return applyIf(h);
};

var hyperIf = hyper["if"];
var hyperStyled = hyper.styled;

exports.C = compose.C;
exports.compose = compose.compose;
exports.addClassNames = classed.addClassNames;
exports.classed = classed.classed;
exports.applyIf = applyIf;
exports["default"] = hyper;
exports.hyperIf = hyperIf;
exports.hyperStyled = hyperStyled;
//# sourceMappingURL=index.js.map
