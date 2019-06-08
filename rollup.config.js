import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import multiEntry from 'rollup-plugin-multi-entry'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const external = [...Object.keys(pkg.peerDependencies || {})]

const plugins = [
  multiEntry(),
  babel({
    runtimeHelpers: true,
    plugins: ['@babel/transform-runtime'],
  }),
  nodeResolve(),
  commonjs(),
  terser({
    keep_fnames: true,
  }),
]

module.exports = {
  input: 'src/*.js',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  external,
  plugins,
}
