import {
  ReactNode,
  ReactElement,
  ComponentType,
  FunctionComponent,
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

type Component<P = any> = ComponentType<P> | FunctionComponent<P> | string;

export interface HyperBase {
  // Function with one or two arguments
  (
    componentOrTag: Component,
    children?: ReadonlyArray<Element> | Element
  ): ReactElement;
  // Function with three arguments, with one being props
  <P extends Properties>(
    componentOrTag: Component<P>,
    properties: (P | Omit<P, "children">) & ExtraParams,
    children?: ReadonlyArray<Element> | Element
  ): ReactElement<P>;
  // Function with one list of elements -> React fragment
  (children?: ReadonlyArray<Element>): ReactFragment;
}
