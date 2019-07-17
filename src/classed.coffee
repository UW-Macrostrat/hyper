import classNames from 'classnames'
import h from 'react-hyperscript'

addClassNames = (props, addedClassNames)->
  {className, rest...} = props
  className = classNames(className, addedClassNames)
  return {className, rest...}

classed = (component, addedClassNames)->
  (props)->
    newProps = addClassNames(props, addedClassNames)
    return h(component, newProps)

export {classed, addClassNames}
