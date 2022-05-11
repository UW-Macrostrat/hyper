import classNames, { Argument } from "classnames";
import h from "./react-hyperscript";
import { ComponentType } from "react";

const addClassNames = function (props, ...addedClassNames: Argument[]) {
  let { className, ...rest } = props;
  className = classNames(className, ...addedClassNames);
  return { className, ...rest };
};

const classed = (component: ComponentType, ...addedClassNames: Argument[]) =>
  function (props) {
    const newProps = addClassNames(props, ...addedClassNames);
    return h(component, newProps);
  };

export { classed, addClassNames };
