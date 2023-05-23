import type { ActionReturn } from 'svelte/action';

let observer: IntersectionObserver;

function initializeObserver() {
	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const event = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(event));
		});
	});
}

interface Attributes {
	'on:enterViewport': (event: CustomEvent<unknown>) => unknown;
	'on:exitViewport': (event: CustomEvent<unknown>) => unknown;
}

export default function viewport(element: HTMLElement): ActionReturn<Attributes> {
	if (!observer) initializeObserver();

	observer.observe(element);

	return {
		destroy() {
			observer.unobserve(element);
		}
	};
}
