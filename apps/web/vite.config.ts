import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	plugins: [
		tailwindcss(),
		tsconfigPaths(),
		tanstackStart(),
		cloudflare({ viteEnvironment: { name: 'ssr' } })],
});
