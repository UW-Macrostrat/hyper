# `@macrostrat/hyper`

Utilities for using `hyperscript` with React. This library is thin wrapper
around [`react-hyperscript`](https://github.com/mlmorg/react-hyperscript)
with some nice additions. It is used in most of [Macrostrat](https://macrostrat.org)'s
modern web applications instead of JSX.

# Basic usage

```js
import { render } from "react-dom";
import h from "@macrostrat/hyper";

const MyDiv = () =>
  h("div", [h("h1", "Hello, world!"), h("p", "This is a paragraph.")]);

const el = document.body.appendChild(document.createElement("div"));
render(h(MyDiv), el);
```

# Applying CSS module styles

The `hyperStyled` function makes working with [CSS modules](https://github.com/css-modules/css-modules) a bit easier.
Finds class names in components and replaces with namespaced values in all components
created. This adds a bit of runtime overhead, but is worth it, since you can transparently refer to styles by their simple names. Accessible as `h.styled`.

## Usage

```js
import { render } from "react-dom";
import styles from "./test.css";

import hyper from "@macrostrat/hyper";
const h = hyper.styled(styles);
// or equivalently
import { hyperStyled } from "@macrostrat/hyper";
const h = hyperStyled(styles);

const el = document.body.appendChild(document.createElement("div"));
render(h("div.styled"), el);
```

If you have a lot of styles, you can apply them all:

```js
import hyper from "@macrostrat/hyper";
import styles from "./test.css";
import styles1 from "./test1.styl";

const h = hyper.styled({ ...styles, ...styles1 });

h("div#pos-1.warning.major-caveat");
```

# Conditional rendering

The `hyperIf` function renders a component only if a boolean argument returns true. Accessible as `h.if`. To wit:

```js
h.if(shouldRender)("div", "I only render when I should");
```

This construction can make conditional template logic easier to read.

# Utilities

### `addClassNames(props)->newProps`

A wrapper around the [classnames](https://github.com/JedWatson/classnames) module,
which extends the `className` string for a `props` object.

### `classed(Component, 'class-name')`

Adds a class to a React component.

### `compose(Components...)`

Compose React components.

### `C(component, props)`

An aggressive shorthand to create a React component that passes through children.

```js
const C =
  (c, props = {}) =>
  ({ children }) =>
    h(c, { ...props, children });
```

Use `compose` and `C` together to improve deeply nested provider chains.

```js
import { compose, C } from "@macrostrat/hyper";
const DataProvider = compose(
  C(PublicURLProvider, { publicURL }),
  C(APIProvider, { baseURL }),
  C(ImageStoreProvider, { baseURL: imageBaseURL }),
  C(TaggingApplication, props)
);
```

Note: Running `compose` within the render function of another component
is a bad idea, since components will be regenerated each time the function
is run. Prefer to run this outside of the render loop where possible.

# Changelog

In version `2.0.0`, (November 2021) the `hyper.styled` function was changed to be
stateful, allowing an easier API for CSS styling. The `applyIf` function was removed from the
public API. In `2.0.1`, we had to roll back some of our notional improvements because they were unworkable with ES Modules.
