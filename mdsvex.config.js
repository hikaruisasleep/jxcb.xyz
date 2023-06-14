import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svx', '.md'],
	smartypants: {
		quotes: true,
		dashes: 'oldschool',
		ellipses: true,
		backticks: false
	},
	frontmatter: {
		marker: '+'
	},
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
