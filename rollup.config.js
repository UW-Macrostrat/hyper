import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';

export default {
 input: 'src/index.ts', // our source file
 preserveModules: true,
 output: [
    {
     dir: pkg.main,
     format: 'cjs',
     sourcemap: true,
     entryFileNames: '[name].js',
     exports: 'named' // disable warning if we mix default and named exports
    },
    {
     dir: pkg.module,
     sourcemap: true,
     entryFileNames: '[name].js',
     format: 'esm' // the preferred format
    },
  ],
  external: Object.keys(pkg.dependencies || {}),
  plugins: [
    resolve({ extensions: [ '.ts' ], module: true}),
    babel({
      extensions: ['.ts'],
      exclude: 'node_modules/**'
    }),
    renameExtensions({
        include: ['**/*.ts'],
        mappings: {'.ts': '.js'}
    })
  ]
};
