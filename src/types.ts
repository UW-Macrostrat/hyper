import {
  ReactNode,
  ComponentType,
  FunctionComponent,
  Ref,
} from "react";

// Directly integrate types from react-hyperscript

type Node = ReactNode | string | number | null;
type Properties = {
  [key: string]: any;
};


export interface Styles {
  [k: string]: string;
}

export type ExtraParams = {
  ref?: Ref<any>;
  key?: any;
  dataset?: { [key: string]: string };
  attributes?: { [key: string]: any };
};

type Component<P = any> = ComponentType<P> | FunctionComponent<P> | string;

type Children = ReadonlyArray<Node> | Node;

export interface HyperBase {
  // Function with one or two arguments
  (
    componentOrTag: Component,
    children?: Children
  ): ReactNode;
  // Function with three arguments, with one being props
  <P extends Properties>(
    componentOrTag: Component<P>,
    properties: (P | Omit<P, "children">) & ExtraParams,
    children?: Children
  ): ReactNode<P>;
  // Function with one list of elements -> React fragment
  (children?: ReadonlyArray<Node>): ReactNode[];
}


export interface Hyper extends HyperBase {
  styled(v: Styles): Hyper;
  styles(): Styles | null;
  if(v: boolean): Hyper;
}

export type HyperStyled = Styles & Hyper;

