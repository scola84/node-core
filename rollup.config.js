import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';

export default {
  dest: './dist/core.js',
  entry: 'index.js',
  format: 'umd',
  moduleName: 'core',
  external: [
    'moment-timezone'
  ],
  globals: {
    'moment-timezone': 'moment'
  },
  plugins: [
    builtins(),
    resolve({
      jsnext: true
    }),
    buble()
  ]
};
