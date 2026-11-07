<script lang="ts">
	import '#lib/styles/scss.scss';
	import '#lib/styles/tailwind.postcss';

	import { page } from '$app/state';

	import Nav from '#lib/components/kreideprinz/Nav.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="container h-[100dvh] min-w-full px-4">
	<header class="flex flex-row flex-wrap justify-between items-center py-2 text-gray-200">
		<h1 class="text-2xl font-extrabold">
			<a href="/kreideprinz">kreideprinz {page.url.pathname.split('/').at(-2)}</a>
		</h1>
		<Nav />
	</header>

	<div class="text-gruvfg">{@render children?.()}</div>
</div>

<style lang="scss">
	:global(html) {
		background-color: $gruv-bg;
	}

	.text-gruvfg {
		color: $gruv-fg;
	}
</style>
