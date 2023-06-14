import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svx', '.md', '.svelte.md'],
	smartypants: {
		dashes: 'oldschool'
	}
});

export default config;
