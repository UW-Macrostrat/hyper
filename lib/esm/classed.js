import { objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2 } from './_virtual/_rollupPluginBabelHelpers.js';
import h from 'react-hyperscript';
import classNames from 'classnames';

var addClassNames = function addClassNames(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  for (var _len = arguments.length, addedClassNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    addedClassNames[_key - 1] = arguments[_key];
  }

  className = classNames.apply(void 0, [className].concat(addedClassNames));
  return _objectSpread2({
    className: className
  }, rest);
};

var classed = function classed(component) {
  for (var _len2 = arguments.length, addedClassNames = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    addedClassNames[_key2 - 1] = arguments[_key2];
  }

  return function (props) {
    var newProps = addClassNames.apply(void 0, [props].concat(addedClassNames));
    return h(component, newProps);
  };
};

export { addClassNames, classed };
//# sourceMappingURL=classed.js.map
