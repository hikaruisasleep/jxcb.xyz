<script lang="ts">
	import '#lib/styles/scss.scss';
	import '#lib/styles/tailwind.postcss';
	import { page } from '$app/state';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	function trim(str: string, ch: string) {
		let start = 0;
		let end = str.length;

		while (start < end && str[start] === ch) ++start;
		while (end > start && str[end - 1] === ch) --end;
		return start > 0 || end < str.length ? str.substring(start, end) : str;
	}

	let title = $derived(
		page.url.pathname.split('/').length > 2
			? `jxcb | ${trim(page.url.pathname, '/').replaceAll('/', '.')}`
			: 'jxcb'
	);
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content="jxcb's personal website" />
</svelte:head>

{@render children?.()}
