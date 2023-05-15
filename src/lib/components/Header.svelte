<script lang="ts">
	export let pageName: string | undefined;
</script>

<header
	class="w-full shadow-md flex flex-col lg:flex-row flex-initial justify-center lg:justify-between items-center py-3 px-24 max-h-min min-w-full transition-all"
>
	<p class="text-3xl font-bold align-middle">
		{#if pageName}
			<a href="/{pageName}" class="text-center flex flex-col sm:flex-row text-lg sm:text-3xl">
				jxcb ፤ project
				<span
					class="bg-gradient-to-br from-orange-700 to-violet-700 bg-clip-text text-transparent text-center text-3xl -translate-y-2"
				>
					{pageName}
				</span>
			</a>
		{:else}
			<a href="/">jxcb</a>
		{/if}
	</p>
	<div class="fa-solid fa-bars fa-2xl sm:fa-xl lg:hidden fixed top-10 sm:top-8 left-4" />
	<nav class="overflow-hidden transition-all lg:h-auto p-0 -mt-2">
		<ul class="text-lg flex flex-row justify-center items-center gap-5">
			<li
				class="hover:brightness-110 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
			>
				<a href="/">home</a>
			</li>
			<li
				class="hover:brightness-110 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
			>
				<a href="/about">about</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		.transition-all {
			height: 0;
			transition-duration: 500ms;
		}
		.fa-bars:hover + .transition-all {
			padding-top: 0.5rem;
			height: 2rem;
		}
	}
</style>
