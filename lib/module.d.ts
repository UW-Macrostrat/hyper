/// <reference types="react" />
/// <reference types="react-hyperscript" />
declare module "classed" {
    const addClassNames: (props: any, ...addedClassNames: import("classnames/types").ClassValue[]) => any;
    const classed: (component: any, ...addedClassNames: import("classnames/types").ClassValue[]) => (props: any) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    export { classed, addClassNames };
}
declare module "compose" {
    const C: (c: any, props?: {}) => ({ children }: {
        children: any;
    }) => import("react").ReactElement<{
        children: any;
    }, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    const compose: (...args: any[]) => (props: any) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    export { compose, C };
}
declare module "index" {
    import hyperScript from 'react-hyperscript';
    type H = typeof hyperScript;
    type HParams = Parameters<H>;
    interface Styles {
        [k: string]: string;
    }
    interface Hyper {
        (...args: HParams): ReturnType<H>;
        styled(v: Styles): Hyper;
        if(v: boolean): Hyper;
    }
    const hyper: Hyper;
    const applyIf: (h: any) => any;
    const hyperIf: (v: boolean) => Hyper;
    const hyperStyled: (v: Styles) => Hyper;
    export default hyper;
    export { compose, C } from "compose";
    export { classed, addClassNames } from "classed";
    export { hyperIf, hyperStyled, applyIf };
}
