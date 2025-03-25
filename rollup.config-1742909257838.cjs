'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');
var terser = require('@rollup/plugin-terser');
var url = require('@rollup/plugin-url');
var pkg = require('./package.json');

var rollup_config = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
    postcss({
      extensions: [".css"],
      modules: true,
      use: ["sass"],
      extract: false,
    }),
    url(),
    terser(),
  ],
};

exports.default = rollup_config;
