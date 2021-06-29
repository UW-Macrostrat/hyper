import h from "react-hyperscript";
import { PropsWithChildren, ComponentType } from "react";

// An aggressive shorthand to create a react component

function C<P>(c: ComponentType<PropsWithChildren<P>>, props: P = {} as P) {
  /** A component that passes through children */
  return (nextProps: PropsWithChildren<{}>) => {
    const { children } = nextProps;
    return h(c, { ...props, children });
  };
}

const compose = (...args: ComponentType[]) =>
  function (props: { [attr: string]: any }) {
    let c: ComponentType;
    const components = [...args];
    // Compose a series of react components
    let child = h(components.pop(), props);
    while ((c = components.pop()) != null) {
      child = h(c, null, child);
    }
    return child;
  };

export { compose, C };
