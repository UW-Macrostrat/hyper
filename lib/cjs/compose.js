'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var h = require('react-hyperscript');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var h__default = /*#__PURE__*/_interopDefaultLegacy(h);

// An aggressive shorthand to create a react component
function C(c) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /** A component that passes through children */
  return function (nextProps) {
    var children = nextProps.children;
    return h__default["default"](c, _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, props), {}, {
      children: children
    }));
  };
}

var compose = function compose() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (props) {
    var c;
    var components = [].concat(args); // Compose a series of react components

    var child = h__default["default"](components.pop(), props);

    while ((c = components.pop()) != null) {
      child = h__default["default"](c, null, child);
    }

    return child;
  };
};

exports.C = C;
exports.compose = compose;
//# sourceMappingURL=compose.js.map
