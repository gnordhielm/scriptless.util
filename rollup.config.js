import globby from 'globby'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const external = [...Object.keys(pkg.peerDependencies || {})]

const plugins = [
  babel({
    runtimeHelpers: true,
    plugins: ['@babel/transform-runtime'],
  }),
  nodeResolve(),
  commonjs(),
  terser(),
]

const configs = globby.sync('src/*.js').map(inputFile => ({
  input: inputFile,
  output: {
    file: inputFile.replace('src', 'public'),
    format: 'cjs',
  },
  external,
  plugins,
}))

module.exports = configs
