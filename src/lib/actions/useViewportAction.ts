let observer: IntersectionObserver;
export let intersect: boolean;

function initializeObserver() {
	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const event = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(event));
		});
	});
}

export default function viewport(element: HTMLElement) {
	if (!observer) initializeObserver();

	observer.observe(element);
	return {
		destroy() {
			observer.unobserve(element);
		}
	};
}
