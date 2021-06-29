import { Argument } from "classnames";
import { ComponentType } from "react";
declare const addClassNames: (props: any, ...addedClassNames: Argument[]) => any;
declare const classed: (component: ComponentType, ...addedClassNames: Argument[]) => (props: any) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export { classed, addClassNames };
