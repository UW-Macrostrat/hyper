'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var classNames = require('classnames');
var h = require('react-hyperscript');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var h__default = /*#__PURE__*/_interopDefaultLegacy(h);

var addClassNames = function addClassNames(props) {
  var className = props.className,
      rest = _rollupPluginBabelHelpers.objectWithoutProperties(props, ["className"]);

  for (var _len = arguments.length, addedClassNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    addedClassNames[_key - 1] = arguments[_key];
  }

  className = classNames__default["default"].apply(void 0, [className].concat(addedClassNames));
  return _rollupPluginBabelHelpers.objectSpread2({
    className: className
  }, rest);
};

var classed = function classed(component) {
  for (var _len2 = arguments.length, addedClassNames = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    addedClassNames[_key2 - 1] = arguments[_key2];
  }

  return function (props) {
    var newProps = addClassNames.apply(void 0, [props].concat(addedClassNames));
    return h__default["default"](component, newProps);
  };
};

exports.addClassNames = addClassNames;
exports.classed = classed;
//# sourceMappingURL=classed.js.map
