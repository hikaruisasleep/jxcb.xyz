<script lang="ts">
	export let data: { content: any; title: any; folder: any };
	let { content, title, folder } = data;
</script>

<main>
	<div class="flex flex-row items-end justify-between mb-2">
		<h1 class="text-4xl text-gruvorange2 font-bold self-start">{title}</h1>
		<h2 class="text-gruvgray text-sm font-extralight">{folder}</h2>
	</div>
	<div class="text-sm text-justify">
		<svelte:component this={content} />
	</div>
</main>

<style lang="scss">
	.text-gruvgray {
		color: $gruv-gray1;
	}

	.text-gruvorange2 {
		color: $gruv-orange2;
	}

	.text-gruvgray2 {
		color: $gruv-gray2;
	}

	:global {
		main {
			blockquote {
				@apply text-gruvgray;
				@apply italic;
				@apply text-left;
				@apply text-sm;
				@apply my-2;
			}
			h3 {
				@apply text-xl;
				@apply text-gruvgray2;
				@apply my-2;
				@apply font-bold;
			}
			h2 {
				@apply text-lg;
				@apply my-2;
				@apply font-bold;
			}
			a {
				color: $gruv-blue2;
				text-decoration: underline;
				&:visited {
					color: $gruv-purple2;
				}
			}
			code {
				@apply text-xs;
			}
		}
	}
</style>
