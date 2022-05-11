import React, {
  ReactNode,
  ReactElement,
  ComponentClass,
  StatelessComponent,
} from "react";

// Directly integrate types from react-hyperscript

type Element = ReactNode | string | number | null;
type Properties = {
  [key: string]: any;
  dataset?: { [key: string]: string } | undefined;
  attributes?: { [key: string]: any } | undefined;
};

type PropertiesOutput = {
  [key: string]: any;
  dataset: undefined;
  attributes: undefined;
};

export interface HyperCore {
  (children?: ReadonlyArray<Element> | Element): ReactElement;
  (
    componentOrTag: ComponentClass | StatelessComponent | string,
    children?: ReadonlyArray<Element> | Element
  ): ReactElement;
  <P extends Properties>(
    componentOrTag: ComponentClass<P> | StatelessComponent<P> | string,
    properties: P,
    children?: ReadonlyArray<Element> | Element
  ): ReactElement<P & PropertiesOutput>;
}
