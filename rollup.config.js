import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url";
import analyzer from "rollup-plugin-analyzer";

import pkg from "./package.json";

export default [
  {
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
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(pkg.dependencies || {}),
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        preferBuiltins: true,
        mainFields: ["module", "main", "browser"],
      }),
      commonjs({
        include: /node_modules/,
      }),
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
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: [
            "console.log",
            "console.info",
            "console.debug",
            "console.warn",
          ],
        },
      }),
      analyzer({
        summaryOnly: true,
        limit: 10,
        filter: (module) => module.percent > 1,
      }),
    ],
  },
  {
    input: "src/demo.ts",
    output: [
      {
        file: "dist/demo.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/demo.esm.js",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(pkg.dependencies || {}),
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        preferBuiltins: true,
        mainFields: ["module", "main", "browser"],
      }),
      commonjs({
        include: /node_modules/,
      }),
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
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: [
            "console.log",
            "console.info",
            "console.debug",
            "console.warn",
          ],
        },
      }),
    ],
  },
];
