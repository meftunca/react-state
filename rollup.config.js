import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import minify from "rollup-plugin-babel-minify";

import pkg from "./package.json";

export default {
  input: "src/main.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    url({ exclude: ["**/*.svg"] }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    minify()
  ]
};
