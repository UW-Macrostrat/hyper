import {
  ReactNode,
  ReactElement,
  ComponentType,
  Ref,
  ReactFragment,
} from "react";

// Directly integrate types from react-hyperscript

type Element = ReactNode | string | number | null;
type Properties = {
  [key: string]: any;
};

export type ExtraParams = {
  ref?: Ref<any>;
  key?: any;
  dataset?: { [key: string]: string };
  attributes?: { [key: string]: any };
};

export interface HyperBase {
  // Function with one or two arguments
  (
    componentOrTag: ComponentType | string,
    children?: ReadonlyArray<Element> | Element
  ): ReactElement;
  // Function with three arguments, with one being props
  <P extends Properties>(
    componentOrTag: ComponentType<P> | string,
    properties: (P | Omit<P, "children">) & ExtraParams,
    children?: ReadonlyArray<Element> | Element
  ): ReactElement<P>;
  // Function with one list of elements -> React fragment
  (children?: ReadonlyArray<Element>): ReactFragment;
}
