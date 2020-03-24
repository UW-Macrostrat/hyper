import hyperScript from 'react-hyperscript';
import { ReactFragment } from 'react';
declare type H = typeof hyperScript;
interface Styles {
    [k: string]: string;
}
interface Hyper extends H {
    (children: ReadonlyArray<Element>): ReactFragment;
    styled(v: Styles): Hyper;
    if(v: boolean): Hyper;
}
declare const applyIf: (h: any) => Hyper;
declare const hyper: Hyper;
declare const hyperIf: (v: boolean) => Hyper;
declare const hyperStyled: (v: Styles) => Hyper;
export default hyper;
export { compose, C } from './compose';
export { classed, addClassNames } from './classed';
export { hyperIf, hyperStyled, applyIf };
