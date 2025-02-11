import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import styles from "./test.module.css";

import h from "../src";
import "./global-styles.css";

const hs = h.styled(styles);

type Example = {
  name: string;
  description?: string;
  component: any;
};

const examples: Example[] = [
  {
    name: "Basic example",
    description: "A simple example of using the `h` function",
    component: () => h("div", "Hello, world"),
  },
  {
    name: "With children",
    description: "An example of using the `h` function with children",
    component: () =>
      h("div", [h("h1", "Hello, world"), h("p", "This is a paragraph")]),
  },
  {
    name: "With a singular child",
    description: "An example of using the `h` function with a single child",
    component: () => h("div", h("h1", "Hello, world")),
  },
  {
    name: "With attributes",
    description: "Using inline styles",
    component: () => h("div", { style: { color: "red" } }, "Hello, world"),
  },
  {
    name: "With class names",
    description: "Using class names",
    component: () => h("div.styled-div", "Hello, world"),
  },
  {
    name: "With multiple classes",
    description: "Using multiple class names",
    component: () =>
      h(
        "div.styled-div",
        {
          className: "another-class",
        },
        "Hello, world",
      ),
  },
  {
    name: "With module styles",
    description: "Using module styles",
    component: () => hs("div.styled-div", "Hello, world"),
  },
  {
    name: "With children as attributes",
    description: "Using children as attributes",
    component: () =>
      h("div", {
        children: ["Hello, world", ", ", h("span", "This is a span")],
      }),
  },
  {
    name: "With singular child as attributes",
    description: "Using a single child as attributes",
    component: () =>
      h("div", {
        children: h("span", "This is a span"),
      }),
  },
  {
    name: "With children overridden",
    description: "Using children as attributes (overriding other children)",
    component: () =>
      h(
        "div",
        {
          children: h("p.error", "This should be overridden"),
        },
        ["Hello, world", ", ", h("span", "This is a span")],
      ),
  },
];

function ExamplesApp() {
  return h(
    "div.examples",
    examples.map((ex, i) => {
      return h("div.example", [
        h("h1", ex.name),
        h.if(ex.description != null)("p.description", ex.description),
        h("div.example-content", [h(ex.component)]),
      ]);
    }),
  );
}

const root = createRoot(document.getElementById("root"));
root.render(h(StrictMode, h(ExamplesApp)));
