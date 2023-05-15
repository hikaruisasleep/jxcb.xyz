<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>
		jxcb
		{$page.url.pathname.split('/').at(-1) ? `| ${$page.url.pathname.split('/').at(-1)}` : ''}
	</title>

	<meta name="description" content="jxcb's personal website" />
</svelte:head>

<slot />
