import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	clean: true,
	dts: !options.watch,
	minify: !options.watch,
	sourcemap: !options.watch,
	entry: ["src/index.ts"],
}));
