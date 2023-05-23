const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				screen: '100dvh'
			},
			maxHeight: {
				screen: '100dvh'
			},
			fontFamily: {
				sans: ['"Wix Madefor Display"', '"Helvetica Neue"', '"Noto Sans"', 'sans-serif']
			},
			transition: {
				all: 'all cubic-bezier(0.8, 0, 0.2, 1) 450ms'
			},
			keyframes: {
				slideUpFade: {
					'0%': {
						translate: '0 1rem',
						opacity: '0'
					},
					'100%': {
						translate: '0 0',
						opacity: '1'
					}
				},
				slideDownFade: {
					'0%': {
						translate: '0 -1rem',
						opacity: '0'
					},
					'100%': {
						translate: '0 0',
						opacity: '1'
					}
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
