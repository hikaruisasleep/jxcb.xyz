<script lang="ts">
	import '$lib/styles/tailwind.postcss';
	import '$lib/styles/scss.scss';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="container bg-slate-50 h-screen min-w-full">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	main {
		width: 90%;
		height: calc(100dvh - 6em);
		margin: 0.5rem auto;
	}
</style>
