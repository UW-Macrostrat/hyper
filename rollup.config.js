import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import coffee from 'rollup-plugin-coffee-script';

export default {
 input: 'src/index.coffee', // our source file
 output: [
    {
     file: pkg.main,
     format: 'cjs',
     exports: 'named' // disable warning if we mix default and named exports
    },
    {
     file: pkg.module,
     format: 'es' // the preferred format
    },
  ],
  external: Object.keys(pkg.dependencies || {}),
  plugins: [
  coffee(),
  babel({
    exclude: 'node_modules/**'
  })
  ]
};
