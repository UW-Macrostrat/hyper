import classNames from 'classnames'
import h from 'react-hyperscript'

applyClassName = (props, addedClassNames)->
  {className, rest...} = props
  className = classNames(className, addedClassNames)
  return {className, rest...}

classed = (component, addedClassNames)->
  (props)->
    newProps = applyClassName(props, addedClassNames)
    return h(component, newProps)

export {classed, addClassName}
