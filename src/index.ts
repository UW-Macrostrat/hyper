import hyperScript from "react-hyperscript";
import {
  ReactNode,
  ReactElement,
  ComponentType,
  ReactFragment,
  Ref,
} from "react";

// Type definitions
type H = typeof hyperScript;
type HParams = Parameters<H>;

interface Styles {
  [k: string]: string;
}

interface Props {
  [attr: string]: any;
}

export interface Hyper {
  // Function with one or two arguments
  (componentOrTag: ComponentType | string, children?: ReactNode): ReactElement;
  // Function with three arguments, with one being props
  <T extends Props>(
    componentOrTag: ComponentType<T> | string,
    properties?: T & { ref?: Ref<any>; key?: any },
    children?: ReactNode
  ): ReactElement<T>;
  // Function with one list of elements -> React fragment
  (children: ReadonlyArray<ReactNode>): ReactFragment;
  styled(v: Styles): Hyper;
  if(v: boolean): Hyper;
}

const hyper_ = function (...args: HParams) {
  return hyperScript(...args);
};

const applyIf = function (h): Hyper {
  h.if = function (v: boolean) {
    // Only renders component if condition is met
    if (v) {
      return h;
    } else {
      return () => null;
    }
  };
  return h;
};

const hyper = applyIf(hyper_);

hyper.styled = function (styles: Styles): Hyper {
  const h = function () {
    const el = hyper.apply(this, arguments);
    const { props } = el;
    if (!("className" in props)) {
      return el;
    }

    let hasChanges = false;
    const newClasses = props.className.split(" ").map(function (d) {
      if (d in styles) {
        hasChanges = true;
        return styles[d];
      }
      return d;
    });

    if (!hasChanges) {
      return el;
    }

    // Create a new react element with local style substitutions
    return {
      ...el,
      props: {
        ...props,
        className: newClasses.join(" "),
      },
    };
  };

  return applyIf(h);
};

const hyperIf = hyper.if;
const hyperStyled = hyper.styled;

export default hyper;
export { compose, C } from "./compose";
export { classed, addClassNames } from "./classed";
export { hyperIf, hyperStyled, applyIf };
