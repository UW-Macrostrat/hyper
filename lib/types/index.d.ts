import hyperScript from 'react-hyperscript';
declare type H = typeof hyperScript;
declare type HParams = Parameters<H>;
interface Styles {
    [k: string]: string;
}
interface Hyper {
    (...args: HParams): ReturnType<H>;
    styled(v: Styles): Hyper;
    if(v: boolean): Hyper;
}
declare const hyper: Hyper;
declare const applyIf: (h: any) => any;
declare const hyperIf: (v: boolean) => Hyper;
declare const hyperStyled: (v: Styles) => Hyper;
export default hyper;
export { compose, C } from './compose';
export { classed, addClassNames } from './classed';
export { hyperIf, hyperStyled, applyIf };
