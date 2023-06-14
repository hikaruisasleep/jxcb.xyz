<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';

	import { page } from '$app/stores';

	import Nav from '$lib/components/kreideprinz/Nav.svelte';
</script>

<div class="container h-[100dvh] min-w-full px-4 bg-yellow-950">
	<header class="flex flex-row flex-wrap justify-between items-center py-2 text-gray-200">
		<h1 class="text-2xl">
			<a href="/kreideprinz">
				kreideprinz {$page.url.pathname.split('/').at(-1)}
			</a>
		</h1>
		<Nav />
	</header>

	<div class="text-white">
		<slot />
	</div>
</div>

<style lang="scss">
</style>
