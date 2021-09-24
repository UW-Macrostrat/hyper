import { PropsWithChildren, ComponentType } from "react";
declare function C<P>(c: ComponentType<PropsWithChildren<P>>, props?: P): (nextProps: PropsWithChildren<{}>) => import("react").ReactElement<PropsWithChildren<P>, string | import("react").JSXElementConstructor<any>>;
declare const compose: (...args: ComponentType[]) => (props: {
    [attr: string]: any;
}) => import("react").ReactElement<{
    [attr: string]: any;
}, string | import("react").JSXElementConstructor<any>>;
export { compose, C };
