const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				screen: '100svh'
			},
			fontFamily: {
				sans: ['"Wix Madefor Display"', '"Helvetica Neue"', '"Noto Sans"', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
