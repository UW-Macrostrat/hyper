/// <reference types="react" />
declare const C: (c: any, props?: {}) => ({ children }: {
    children: any;
}) => import("react").ReactElement<{
    children: any;
}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
declare const compose: (...args: any[]) => (props: any) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
export { compose, C };
