import hyperScript from "./react-hyperscript";
import type { Hyper, HyperStyled, Styles, HyperBase  } from "./types";
import type { ReactElement, ReactNode } from "react";
import { isValidElement } from "react";

export type { Hyper, HyperStyled, Styles };

export interface Props {
  [attr: string]: any;
}

function applyStyles(
  element: ReactElement<any>,
  styles: Styles
): ReactNode {
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

function createNoOpHyper(): Hyper {
  const _hyper = () => null;
  _hyper.if = () => _hyper;
  _hyper.styled = () => _hyper;
  _hyper.styles = () => {
    return {};
  };
  return _hyper as Hyper;
}

const hyperCore: HyperBase = function (...args) {
  if (args.length === 2 && isValidElement(args[1])) {
    // Special case where a single child element is passed
    return hyperScript(args[0], null, args[1]);
  }
  return hyperScript.apply(this, args);
};

function createHyper(styles = {}): Hyper {
  const _hyper = function () {
    // First, run the core hyper function
    const el = hyperCore.apply(this, arguments);
    // If no styles are registered, return the element

    return applyStyles(el, styles);
  };

  _hyper.if = function (v: boolean): Hyper {
    // Only renders component if condition is met
    if (v) {
      return _hyper as Hyper;
    } else {
      // Return a no-op hyper
      return createNoOpHyper();
    }
  };

  _hyper.styled = function (styles: Styles | null): Hyper {
    return createHyper(styles);
  };

  _hyper.styles = function () {
    return styles;
  };

  return _hyper as Hyper;
}

const hyper = createHyper();

export default hyper;

export const hyperIf = hyper.if;
export const hyperStyled = hyper.styled;

export { compose, C } from "./compose";
export { classed, addClassNames } from "./classed";
