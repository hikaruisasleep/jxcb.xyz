<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		data: { content: Component; title: string; folder: string };
	}

	let { data }: Props = $props();

	const title = $derived(data.title);
	const folder = $derived(data.folder);
	const SvelteComponent = $derived(data.content);
</script>

<main>
	<div class="flex flex-row items-end justify-between mb-2">
		<h1 class="text-4xl text-gruvorange2 font-bold self-start">{title}</h1>
		<h2 class="text-gruvgray text-sm font-extralight">{folder}</h2>
	</div>
	<div class="text-sm text-justify">
		<SvelteComponent />
	</div>
</main>

<style lang="scss">
	.text-gruvgray {
		color: $gruv-gray1;
	}

	.text-gruvorange2 {
		color: $gruv-orange2;
	}

	:global {
		main {
			blockquote {
				color: $gruv-gray1;
				font-style: italic;
				text-align: left;
				font-size: 0.875rem;
				line-height: 1.25rem;
				margin-top: 0.5rem;
				margin-bottom: 0.5rem;
			}
			h3 {
				font-size: 1.25rem;
				line-height: 1.75rem;
				color: $gruv-gray2;
				margin-top: 0.5rem;
				margin-bottom: 0.5rem;
				font-weight: 700;
			}
			h2 {
				font-size: 1.125rem;
				line-height: 1.75rem;
				margin-top: 0.5rem;
				margin-bottom: 0.5rem;
				font-weight: 700;
			}
			a {
				color: $gruv-blue2;
				text-decoration: underline;
				&:visited {
					color: $gruv-purple2;
				}
			}
			code {
				font-size: 0.75rem;
				line-height: 1rem;
			}
		}
	}
</style>
