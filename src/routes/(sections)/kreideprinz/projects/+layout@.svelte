<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';
	import '$lib/styles/prism-gruvbox-dark.css';

	import Nav from '$lib/components/kreideprinz/Nav.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
		integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="container min-w-full px-4">
	<header class="flex flex-row flex-wrap justify-between items-center py-2 text-gray-200">
		<h1 class="text-3xl font-extrabold">
			<a href="/kreideprinz/projects"> kreideprinz projects </a>
		</h1>
		<Nav />
	</header>

	<div class="text-gruvfg w-[80vw] lg:w-[75ch] mx-auto">
		<slot />
	</div>
</div>

<style lang="scss">
	:global(html) {
		background-color: $gruv-bg;
	}

	.text-gruvfg {
		color: $gruv-fg;
	}
</style>
