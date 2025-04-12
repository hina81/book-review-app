import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	test: {
		globals: true,
		environment: "jsdom",
    setupFiles: ['./vitest/setup.js'],
		exclude: [...configDefaults.exclude, "tests/**", "tests-examples"],
	},
});