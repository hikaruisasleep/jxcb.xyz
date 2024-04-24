<script lang="ts">
	import '$lib/styles/tailwind.postcss';
	import '$lib/styles/scss.scss';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
</script>

<div class="container bg-slate-50 h-screen min-w-full">
	<Header pageName={$page.url.pathname.split('/').at(1)} />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	main {
		width: min(80ch, 100% - 2rem);
		margin: 0.5rem auto;
	}
</style>
