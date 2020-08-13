import { ReactElement, ComponentType, ReactFragment, Ref } from "react";
interface Styles {
    [k: string]: string;
}
declare type Element = ReactElement | string | number | null;
interface Props {
    [attr: string]: any;
    ref?: Ref<any>;
}
interface Hyper {
    (componentOrTag: ComponentType | string, children?: ReadonlyArray<Element> | Element): ReactElement;
    <T extends Props>(componentOrTag: ComponentType<T> | string, properties: Props, children?: ReadonlyArray<Element> | Element): ReactElement<T>;
    (children: ReadonlyArray<Element>): ReactFragment;
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
