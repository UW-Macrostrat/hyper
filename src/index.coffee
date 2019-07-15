import hyper from 'react-hyperscript'

applyIf = (h)->
  h.if = (v)->
    # Only renders component if condition is met
    if v then h else -> null
  return h

hyper.if = applyIf(hyper)

hyper.styled = (styles)->
  h = ->
    el = hyper.apply(@,arguments)
    {props} = el
    return el unless "className" of props

    hasChanges = false
    newClasses = props.className.split(" ").map (d)->
      if d of styles
        hasChanges = true
        return styles[d]
      return d

    return el unless hasChanges

    # Create a new react element with local style substitutions
    return {
      el...
      props: {
        props...,
        className: newClasses.join(" ")
      }
    }

  applyIf(h)

hyperIf = hyper.if
hyperStyled = hyper.styled

export default hyper
export {hyperIf, hyperStyled}
