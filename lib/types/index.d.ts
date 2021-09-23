import { ReactNode, ReactElement, ComponentType, ReactFragment, Ref } from "react";
export interface Styles {
    [k: string]: string;
}
export interface Props {
    [attr: string]: any;
}
interface HyperBase {
    (componentOrTag: ComponentType | string, children?: ReadonlyArray<ReactNode> | ReactElement | string): ReactElement;
    <T extends Props>(componentOrTag: ComponentType<T> | string, properties?: T & {
        ref?: Ref<any>;
        key?: any;
    } | null, children?: ReactNode): ReactElement<T>;
    (children: ReadonlyArray<ReactNode>): ReactFragment;
}
interface Hyper extends HyperBase {
    styled(v: Styles): Hyper;
    if(v: boolean): Hyper;
}
declare const applyIf: (h: any) => Hyper;
declare const hyper: Hyper;
declare const hyperIf: (v: boolean) => Hyper;
declare const hyperStyled: (v: Styles) => Hyper;
export default hyper;
export { compose, C } from "./compose";
export { classed, addClassNames } from "./classed";
export { hyperIf, hyperStyled, applyIf };
