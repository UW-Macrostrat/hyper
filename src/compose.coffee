import h from 'react-hyperscript'

compose = (args...)->(props)->
  components = [args...]
  # Compose a series of react components
  {children: child, rest...} = props
  child = h(components.pop(), props)
  while (c = components.pop())?
    child = h(c, null, child)
  return child

export {compose}
