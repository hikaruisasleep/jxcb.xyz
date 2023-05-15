<script lang="ts">
	export let pageName: string | undefined;
</script>

<header
	class="w-full shadow-md flex flex-initial justify-between items-center py-3 px-24 max-h-min min-w-full"
>
	<p class="text-3xl font-bold align-middle">
		{#if pageName}
			<a href="/{pageName}">
				jxcb ፤ project <span
					class="bg-gradient-to-br from-orange-700 to-violet-700 bg-clip-text text-transparent"
					>{pageName}</span
				>
			</a>
		{:else}
			<a href="/">jxcb</a>
		{/if}
	</p>
	<nav>
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
