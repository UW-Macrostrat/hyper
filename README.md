# Hyper

Utilities for using `hyperscript` with React. A thin wrapper
around [`react-hyperscript`](https://github.com/mlmorg/react-hyperscript).

# Usage

```js
import h from '@macrostrat/hyper'

MyDiv = ()=> h('div')

```

## Added functions

### `hyperIf`

Render a component only if a boolean argument returns true. Accessible as `h.if`

Usage: `h.if(shouldRender)('div', "I only render when I should")`

### `hyperStyled`

Makes working with [CSS modules](https://github.com/css-modules/css-modules) a bit easier.
Finds class names in components and replaces with namespaced values in all components
created. Adds a bit of runtime overhead. Accessible as `h.styled`.

Usage:

```js
import styles from './test.css'

import {hyperStyled} from '@macrostrat/hyper'
h = hyperStyled(styles)
// or equivalently
import hyper from '@macrostrat/hyper'
h = hyper.styled(styles)

```

## Utilities

### `addClassNames(props)->newProps`

A wrapper around the [classnames](https://github.com/JedWatson/classnames) module,
which extends the `className` string for a `props` object.

### `classed(Component, 'class-name')`

Adds a class to a React component.
