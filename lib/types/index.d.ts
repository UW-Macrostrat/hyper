import { ReactNode, ReactElement, ComponentType, ReactFragment, Ref } from "react";
interface Styles {
    [k: string]: string;
}
interface Props {
    [attr: string]: any;
}
interface Hyper {
    (componentOrTag: ComponentType | string, children?: ReactNode): ReactElement;
    <T extends Props>(componentOrTag: ComponentType<T> | string, properties: T & {
        ref?: Ref<any>;
        key?: any;
    }, children?: ReactNode): ReactElement<T>;
    (children: ReadonlyArray<ReactNode>): ReactFragment;
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
