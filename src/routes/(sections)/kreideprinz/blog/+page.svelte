<script lang="ts">
	import Postcard from '$lib/components/kreideprinz/Postcard.svelte';

	export let data: any;
	console.log(data.ret);
</script>

<h2 class="font-extrabold text-2xl">posts:</h2>
<main data-sveltekit-preload-data="off">
	{#each data.ret as post}
		<Postcard link={post.link} title={post.title} description={post.description} />
	{/each}
</main>
