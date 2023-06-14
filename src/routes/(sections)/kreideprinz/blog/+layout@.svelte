<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';

	import { page } from '$app/stores';

	import Nav from '$lib/components/kreideprinz/Nav.svelte';
</script>

<div class="container h-[100dvh] min-w-full px-4 bg-gruvbg">
	<header class="flex flex-row flex-wrap justify-between items-center py-2 text-gray-200">
		<h1 class="text-3xl font-extrabold">
			<a href="/kreideprinz"> kreideprinz blog </a>
		</h1>
		<Nav />
	</header>

	<div class="text-gruvfg w-[80vw] lg:w-[60ch] mx-auto">
		<slot />
	</div>
</div>

<style lang="scss">
	.bg-gruvbg {
		background-color: $gruv-bg;
	}

	.text-gruvfg {
		color: $gruv-fg;
	}
</style>
