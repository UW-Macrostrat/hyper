import hyperScript from "react-hyperscript";
import React, {
  ReactNode,
  ReactElement,
  ComponentType,
  ReactFragment,
  Ref,
  isValidElement,
} from "react";

export interface Styles {
  [k: string]: string;
}

export interface Props {
  [attr: string]: any;
}

type ExtraParams = { ref?: Ref<any>; key?: any };

interface HyperBase {
  // Function with one or two arguments
  (
    componentOrTag: ComponentType | string,
    children?: ReadonlyArray<ReactNode> | ReactElement | string
  ): ReactElement;
  // Function with three arguments, with one being props
  <T extends Props>(
    componentOrTag: ComponentType<T> | string,
    properties?: ((T | Omit<T, "children">) & ExtraParams) | null,
    children?: ReactNode
  ): ReactElement<T>;
  // Function with one list of elements -> React fragment
  (children: ReadonlyArray<ReactNode>): ReactFragment;
}

interface Hyper extends HyperBase {
  styled(v: Styles): Hyper;
  if(v: boolean): Hyper;
}

function applyStyles(
  element: React.ReactElement<any>,
  styles: Styles
): React.ReactNode {
  const { props } = element;
  const { className } = props;
  if (className == null) {
    return element;
  }

  let hasChanges = false;
  const newClasses = className.split(" ").map(function (d) {
    if (d in styles) {
      hasChanges = true;
      return styles[d];
    }
    return d;
  });

  if (!hasChanges) {
    return element;
  }

  // Create a new react element with local style substitutions
  return {
    ...element,
    props: {
      ...props,
      className: newClasses.join(" "),
    },
  };
}

function applyComplications(hyperBase: HyperBase): Hyper {
  let _styles = null;

  const _hyper = function () {
    // First, run the core hyper function
    const el = hyperBase.apply(this, arguments);
    // If no styles are registered, return the element

    if (_styles === null) {
      return el;
    } else {
      // Otherwise, apply the styles
      return applyStyles(el, _styles);
    }
  };

  _hyper.if = function (v: boolean): Hyper {
    // Only renders component if condition is met
    if (v) {
      return _hyper;
    } else {
      // Return a no-op hyper
      return applyComplications(() => null);
    }
  };

  _hyper.styled = function (styles: Styles | null): Hyper {
    _styles = styles;
    return _hyper;
  };

  _hyper.styles = function () {
    return _styles;
  };

  return _hyper;
}

function createHyper(): Hyper {
  let hyperCore: HyperBase = function (...args): ReactElement {
    if (args.length === 2 && isValidElement(args[1])) {
      // Special case where a single child element is passed
      return hyperScript(args[0], null, args[1]);
    }
    return hyperScript(...args);
  } as Hyper;

  return applyComplications(hyperCore);
}

const hyper = createHyper();

const hyperIf = hyper.if;
const hyperStyled = hyper.styled;

export default hyper;
export { compose, C } from "./compose";
export { classed, addClassNames } from "./classed";
export { hyperIf, hyperStyled };
