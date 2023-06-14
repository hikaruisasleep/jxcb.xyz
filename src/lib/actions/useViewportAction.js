/**
 * @type {IntersectionObserver}
 */
let observer;

function initializeObserver() {
	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const event = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(event));
		});
	});
}

/**
 * @param {HTMLElement} element
 */
export default function viewport(element) {
	if (!observer) initializeObserver();

	observer.observe(element);

	return {
		destroy() {
			observer.unobserve(element);
		}
	};
}
