import { ReactNode, ReactElement, ComponentType, ReactFragment, Ref } from "react";
interface Styles {
    [k: string]: string;
}
interface Props {
    [attr: string]: any;
}
interface HyperElement<T = {}> extends ReactElement<T> {
    isReactElement: true;
}
interface HyperBase {
    (componentOrTag: ComponentType | string, children?: ReadonlyArray<ReactNode>): HyperElement;
    (componentOrTag: ComponentType | string, child: HyperElement): HyperElement;
    <T extends Props>(componentOrTag: ComponentType<T> | string, properties?: T & {
        ref?: Ref<any>;
        key?: any;
    } | null, children?: ReactNode): HyperElement<T>;
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
