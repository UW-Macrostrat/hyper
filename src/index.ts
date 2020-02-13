/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import hyperScript from 'react-hyperscript';

type H = typeof hyperScript
type HParams = Parameters<H>

interface Styles {
  [k: string]: string
}

interface Hyper {
  (...args: HParams): ReturnType<H>,
  styled(v: Styles): Hyper,
  if(v: boolean): Hyper
}

const hyper: Hyper = function(...args: HParams){
  return hyperScript(...args)
}

hyper.if = null

const applyIf = function(h) {
  h.if = function(v: boolean){
    // Only renders component if condition is met
    if (v) { return h; } else { return () => null; }
  };
  return h;
};

applyIf(hyper);

hyper.styled = function(styles: Styles){
  const h = function() {
    const el = hyper.apply(this,arguments);
    const {props} = el;
    if (!("className" in props)) { return el; }

    let hasChanges = false;
    const newClasses = props.className.split(" ").map(function(d){
      if (d in styles) {
        hasChanges = true;
        return styles[d];
      }
      return d;
    });

    if (!hasChanges) { return el; }

    // Create a new react element with local style substitutions
    return {
      ...el,
      props: {
        ...props,
        className: newClasses.join(" ")
      }
    };
  };

  return applyIf(h);
};

const hyperIf = hyper.if;
const hyperStyled = hyper.styled;

export default hyper;
export {compose, C} from './compose';
export {classed, addClassNames} from './classed';
export {hyperIf, hyperStyled, applyIf};
