import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');

export default {
  entry: 'index.js',
  output: {
    file: pkg['main'],
    format: 'cjs',
    sourcemap: 'inline',
    name: 'injector'
  },
  plugins: [buble()]
};
