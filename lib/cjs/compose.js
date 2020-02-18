'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./_virtual/_rollupPluginBabelHelpers.js');
var h = _interopDefault(require('react-hyperscript'));

var C = function C(c) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (_ref) {
    var children = _ref.children;
    return h(c, __chunk_1.objectSpread2({}, props, {
      children: children
    }));
  };
};

var compose = function compose() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (props) {
    var c;
    var components = [].concat(args); // Compose a series of react components

    var child = h(components.pop(), props);

    while ((c = components.pop()) != null) {
      child = h(c, null, child);
    }

    return child;
  };
};

exports.C = C;
exports.compose = compose;
//# sourceMappingURL=compose.js.map
