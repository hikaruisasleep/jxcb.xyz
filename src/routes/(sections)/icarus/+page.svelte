<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="container bg-slate-50 h-screen min-w-full">
	<Header pageName="icarus" />
	<main>
		<h1 class="text-2xl">Project-Icarus</h1>
		<hr />
		<section class="flex flex-initial justify-between">
			<p>Nothing available yet. Stay tuned!</p>
			<div class="max-w-[15ch] lg:max-w-[20ch] bg-slate-400 opacity-60">
				<p class="text-justify text-sm">
					When you don't know what to do, just take the first step. The rest will figure itself out
					naturally.
					<i>- Beidou</i>
				</p>
			</div>
		</section>
	</main>
</div>

<style lang="scss">
	main {
		width: min(85ch, 100% - 3rem);
		margin: 0.5rem auto;
	}
</style>
