<script lang="ts">
	import Postcard from '$lib/components/kreideprinz/Postcard.svelte';

	export let data: { ret: { title: string; link: string }[] };
</script>

<div class="flex flex-col gap-4">
	{#each data.ret as post, i}
		{#if i < 2}
			<Postcard
				link={post.link}
				title={post.title}
				description={post.link.split('/').at(-2) || ''}
				preloadData={true}
			/>
		{:else}
			<Postcard
				link={post.link}
				title={post.title}
				description={post.link.split('/').at(-2) || ''}
				preloadData={false}
			/>
		{/if}
	{/each}
</div>

<style lang="scss">
	:global(a) {
		text-decoration: none;
	}
</style>
