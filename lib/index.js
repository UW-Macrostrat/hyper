import h from 'react-hyperscript';
import classNames from 'classnames';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

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
export { addClassNames, applyIf, classed, compose, hyperIf, hyperStyled };
//# sourceMappingURL=index.js.map
