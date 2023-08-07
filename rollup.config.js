import babel from "@rollup/plugin-babel";
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import dynamicImport from '@rollup/plugin-dynamic-import-vars';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: './src/index.js',
    output: [
      {
        dir: 'dist',                                  // Multiple files generated for dynamic import, output.dir is required
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        inlineDynamicImports: true                    // ES does not support multiple files, set dynamic imports included
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'Scratch',
        inlineDynamicImports: true,                   // UMD does not support multiple files, set dynamic imports included
        globals: {
          react: 'React',
          "prop-types": 'PropTypes',
          classnames: 'classNames'
        },
      }
    ],
    plugins: [
      // Allow CSS files imports
      postcss({
        plugins: [],
        minimize: true
      }),

      // Transpile
      babel({
        exclude: 'node_modules/**/*',
        babelHelpers: 'runtime'
      }),

      // Allow import at run time with import().then(...), see (https://www.npmjs.com/package/%40rollup/plugin-dynamic-import-vars)
      // for limitations
      dynamicImport({
        warnOnError: true
      }),

      // Exclude peer dependencies packages from bundle
      external(),

      // Locates modules in node_modules (React, ...)
      resolve(),

      // Use terser to minify compiled files and lower network traffic
      terser()
    ]
  }
]