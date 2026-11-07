import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],
			// Consult https://kit.svelte.dev/docs/integrations#preprocessors
			// for more information about preprocessors
			preprocess: [
				preprocess({
					postcss: true,
					scss: {
						prependData: '@use "src/lib/styles/variables.scss" as *;',
						includePaths: [root]
					}
				}),
				mdsvex(mdsvexConfig)
			],

			// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
			// If your environment is not supported or you settled on a specific environment, switch out the adapter.
			// See https://kit.svelte.dev/docs/adapters for more information about adapters.
			adapter: adapter({ out: 'build' })
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/lib/styles/variables.scss" as *;',
				loadPaths: [root]
			}
		}
	}
});
