<script lang="ts">
	export let data: any;
</script>

<h1 class="text-4xl text-gruvgray2 font-bold self-start mb-1">{data.title}</h1>
<h2 class="text-gruvgray text-sm font-extralight mb-2">{data.date}</h2>
<div class="text-base text-justify">
	<svelte:component this={data.content} />
</div>

<style lang="scss">
	.text-gruvgray {
		color: $gruv-gray1;
	}

	.text-gruvgray2 {
		color: $gruv-gray2;
	}

	:global(blockquote) {
		@apply text-gruvgray;
		@apply italic;
		@apply text-left;
		@apply text-sm;
		@apply my-2;
	}

	:global(h3) {
		@apply text-xl;
		@apply text-gruvgray2;
		@apply my-2;
		@apply font-bold;
	}
</style>
