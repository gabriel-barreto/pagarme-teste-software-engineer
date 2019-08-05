import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const deps = require('./package.json').dependencies;
const external = Object.keys(deps);

export default {
    input: 'app.js',
    output: {
        file: 'bin/app.js',
        format: 'cjs',
        name: 'App',
    },
    plugins: [
        resolve({ mainFields: ['module', 'main'], modulesOnly: true }),
        commonjs(),
    ],
    external,
};
