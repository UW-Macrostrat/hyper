import classNames from 'classnames';
import h from 'react-hyperscript';
import {ComponentType} from 'react'; 

type ClassNames = Parameters<typeof classNames>

const addClassNames = function(props, ...addedClassNames: ClassNames){
  let {className, ...rest} = props;
  className = classNames(className, ...addedClassNames);
  return {className, ...rest};
};

const classed = (component: ComponentType, ...addedClassNames: ClassNames) => (function(props) {
    const newProps = addClassNames(props, ...addedClassNames);
    return h(component, newProps);
});

export {classed, addClassNames};
