import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
 input: 'src/index.ts', // our source file
 output: [
    {
     file: pkg.main,
     format: 'cjs',
     sourcemap: true,
     entryFileNames: '[name].js',
     exports: 'named' // disable warning if we mix default and named exports
    },
    {
     file: pkg.module,
     sourcemap: true,
     entryFileNames: '[name].js',
     format: 'es' // the preferred format
    },
  ],
  external: Object.keys(pkg.dependencies || {}),
  plugins: [
    resolve({ extensions: [ '.ts' ], module: true}),
    babel({
      extensions: ['.ts'],
      exclude: 'node_modules/**'
    })
  ]
};
