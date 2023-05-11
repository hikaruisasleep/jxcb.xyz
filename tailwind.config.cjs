const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				screen: '100svh'
			},
			maxHeight: {
				screen: '100svh'
			},
			fontFamily: {
				sans: ['"Wix Madefor Display"', '"Helvetica Neue"', '"Noto Sans"', 'sans-serif']
			},
			keyframes: {
				slideUpFade: {
					'0%': {
						transform: 'translateY(1rem)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
