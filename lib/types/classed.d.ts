import { ClassValue } from "classnames";
import { ComponentType } from "react";
declare const addClassNames: (props: any, ...addedClassNames: ClassValue[]) => any;
declare const classed: (component: ComponentType, ...addedClassNames: ClassValue[]) => (props: any) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
export { classed, addClassNames };
