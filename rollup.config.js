import nodePolyfills from "rollup-plugin-polyfill-node";
import resolve from "@rollup/plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";

export default {
	input: "./index.js", // 入口
	output: [
		{
			file: "./dist/index.umd.js", // 出口
			format: "umd",
			name: "pLimit",
		},
	],
	plugins: [
		nodePolyfills(/* options */),
		resolve({ preferBuiltins: true, mainFields: ["browser"] }),
		builtins(),
	],
};
