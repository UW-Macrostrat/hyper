/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import classNames from 'classnames';
import h from 'react-hyperscript';

type ClassNames = Parameters<typeof classNames>

const addClassNames = function(props, ...addedClassNames: ClassNames){
  let {className, ...rest} = props;
  className = classNames(className, ...addedClassNames);
  return {className, ...rest};
};

const classed = (component, ...addedClassNames: ClassNames) => (function(props) {
    const newProps = addClassNames(props, ...addedClassNames);
    return h(component, newProps);
});

export {classed, addClassNames};
