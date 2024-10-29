import {
  ReactNode,
  ComponentType,
  ExoticComponent,
  Component,
  ReactElement,
  Ref,
} from "react";

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

type AnyComponent<P = any> = ComponentType<P> | ExoticComponent<P> | Component<P> | string;

export interface HyperBase {
  // Function with one or two arguments
  (
    componentOrTag: AnyComponent,
    children?: ReactNode
  ): ReactElement<any, any> | null;
  // Function with three arguments, with one being props
  <P extends Properties>(
    componentOrTag: AnyComponent<P>,
    properties: (P | Omit<P, "children">) & ExtraParams,
    children?: ReactNode
  ): ReactElement<any, any> | null;
  // Function with one list of elements -> React fragment
  (children?: Array<ReactNode>): ReactElement<any, any> | null;
}


export interface Hyper extends HyperBase {
  styled(v: Styles): Hyper;
  styles(): Styles | null;
  if(v: boolean): Hyper;
}

export type HyperStyled = Styles & Hyper;

