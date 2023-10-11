import buble from 'rollup-plugin-buble';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: 'inline',
    name: 'injector'
  },
  plugins: [buble()]
};
