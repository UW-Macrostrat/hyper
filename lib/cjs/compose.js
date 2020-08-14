'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var h = _interopDefault(require('react-hyperscript'));

// An aggressive shorthand to create a react component
function C(c) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (nextProps) {
    var children = nextProps.children;
    return h(c, _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, props), {}, {
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
