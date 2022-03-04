
import type { RollupOptions } from 'rollup';
import generateHeader from './config/header';
import { name as PackageName } from "./package.json" 

import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import {babel} from "@rollup/plugin-babel"
import nodeResolve from "@rollup/plugin-node-resolve"

const config: RollupOptions = {
    input: 'src/index.ts',
    output: {
        banner: generateHeader(),
        format: 'iife',
        file: `dist/${PackageName}.user.js`,
        sourcemap: true
    },

    plugins: [
        nodeResolve({ extensions: ['.js', '.ts', '.tsx'] }),
        typescript(),
        commonjs({include: "node_modules/**"}),
        babel({ babelHelpers: 'bundled', extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']}),
    ]
}

export default config