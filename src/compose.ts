/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import h from 'react-hyperscript';

const compose = (...args) => (function(props) {
  let c;
  const components = [...args];
  // Compose a series of react components
  let child = h(components.pop(), props);
  while ((c = components.pop()) != null) {
    child = h(c, null, child);
  }
  return child;
});

export {compose};
