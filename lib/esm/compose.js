import { objectSpread2 as _objectSpread2 } from './_virtual/_rollupPluginBabelHelpers.js';
import h from 'react-hyperscript';

// An aggressive shorthand to create a react component
function C(c) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (nextProps) {
    var children = nextProps.children;
    return h(c, _objectSpread2(_objectSpread2({}, props), {}, {
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

export { C, compose };
//# sourceMappingURL=compose.js.map
