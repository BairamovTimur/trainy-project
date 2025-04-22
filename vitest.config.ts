import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['src/__tests__/vitest.setup.ts'],
		css: {
			modules: {
				classNameStrategy: 'non-scoped',
			},
		},
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: [
				'src/helpers/**/*.{js,jsx,ts,tsx}',
				'src/components/**/*.{js,jsx,ts,tsx}',
			],
			exclude: ['node_modules', 'src/__tests__/**/*'],
		},
	},
});
