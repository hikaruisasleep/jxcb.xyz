<script lang="ts">
	import Postcard from '$lib/components/kreideprinz/Postcard.svelte';

	export let data: { ret: { title: string; link: string; date: Date; description: string }[] };
</script>

<main class="flex flex-col gap-4">
	{#each data.ret as post, i}
		{#if i < 2}
			<Postcard
				link={post.link}
				title={post.title}
				description={post.description}
				date={post.date}
				preloadData={true}
			/>
		{:else}
			<Postcard
				link={post.link}
				title={post.title}
				description={post.description}
				date={post.date}
				preloadData={false}
			/>
		{/if}
	{/each}
</main>
