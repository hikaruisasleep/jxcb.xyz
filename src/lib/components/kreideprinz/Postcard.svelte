<script lang="ts">
	export let title: string, description: string, link: string, date: Date, preloadData: boolean;
</script>

<a href={link} data-sveltekit-preload-data={preloadData ? 'hover' : 'off'}>
	<div class="min-w-full bg-gruvfg aspect-[10/1] grid grid-rows-3 grid-cols-2 place-items-center">
		{#if description}
			<p
				class="font-bold text-2xl text-gruvbg row-start-1 col-start-1 row-span-2 col-span-1 w-full"
			>
				{title}
			</p>
			<p
				class="font-extralight text-xs text-gruvgray row-start-3 col-start-1 row-span-1 col-span-1 w-full"
			>
				{description}
			</p>
		{:else}
			<p
				class="font-bold text-2xl text-gruvbg row-start-1 col-start-1 row-span-3 col-span-1 w-full"
			>
				{title}
			</p>
		{/if}
		<p
			class="font-extralight text-sm text-gruvgray row-start-1 col-start-2 row-span-3 col-span-1 w-full text-right"
		>
			{date.getUTCDate().toString()}/{date.getUTCMonth().toString()}/{date
				.getUTCFullYear()
				.toString()}
			{date.getUTCHours().toString().length < 2
				? `0${date.getUTCHours().toString()}`
				: date.getUTCHours().toString()}:{date.getUTCMinutes().toString().length < 2
				? `0${date.getUTCMinutes().toString()}`
				: date.getUTCMinutes().toString()}
			UTC
		</p>
	</div>
</a>

<style lang="scss">
	.bg-gruvfg {
		background-color: $gruv-fg;
	}

	.text-gruvbg {
		color: $gruv-bg;
	}
	.text-gruvgray {
		color: $gruv-gray1;
	}
</style>
