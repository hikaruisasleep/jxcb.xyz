<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';
	import { page } from '$app/stores';

	let title: string | undefined = 'jxcb';

	function trim(str: string, ch: string) {
		let start = 0;
		let end = str.length;

		while (start < end && str[start] === ch) ++start;
		while (end > start && str[end - 1] === ch) --end;
		return start > 0 || end < str.length ? str.substring(start, end) : str;
	}

	if ($page.url.pathname.split('/').length > 2) {
		let subpages = trim($page.url.pathname, '/').replaceAll('/', '.');
		title = `jxcb | ${subpages}`;
	}
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content="jxcb's personal website" />
</svelte:head>

<slot />
