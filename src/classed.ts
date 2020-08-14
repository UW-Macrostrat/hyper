import classNames from "classnames";
import { ClassValue } from "classnames/types";
import h from "react-hyperscript";
import { ComponentType } from "react";

const addClassNames = function (props, ...addedClassNames: ClassValue[]) {
  let { className, ...rest } = props;
  className = classNames(className, ...addedClassNames);
  return { className, ...rest };
};

const classed = (component: ComponentType, ...addedClassNames: ClassValue[]) =>
  function (props) {
    const newProps = addClassNames(props, ...addedClassNames);
    return h(component, newProps);
  };

export { classed, addClassNames };
