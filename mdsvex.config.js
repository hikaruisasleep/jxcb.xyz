import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import math from 'remark-math';
import math_katex from 'rehype-katex-svelte';

const config = defineConfig({
	extensions: ['.svx', '.md', '.svelte.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [math],
	rehypePlugins: [math_katex]
});

export default config;
