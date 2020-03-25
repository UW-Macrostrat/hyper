import { PropsWithChildren, ComponentType } from 'react';
declare function C<P>(c: ComponentType<PropsWithChildren<P>>, props?: P): (nextProps: {
    children?: import("react").ReactNode;
}) => import("react").ReactElement<PropsWithChildren<P>, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
declare const compose: (...args: ComponentType<{}>[]) => (props: any) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
export { compose, C };
