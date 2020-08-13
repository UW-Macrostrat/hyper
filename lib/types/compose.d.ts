import { PropsWithChildren, ComponentType } from "react";
declare function C<P>(c: ComponentType<PropsWithChildren<P>>, props?: P): (nextProps: PropsWithChildren<{}>) => import("react").ReactElement<PropsWithChildren<P>, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
declare const compose: (...args: ComponentType[]) => (props: {
    [attr: string]: any;
}) => import("react").ReactElement<{
    [attr: string]: any;
}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
export { compose, C };
