<script lang="ts">
	export let data: { title: string; date: Date; content: any };
	let { title, date, content } = data;
</script>

<main>
	<div class="flex flex-row items-end justify-between mb-2">
		<h1 class="text-4xl text-gruvorange2 font-bold self-start">{title}</h1>
		<h2 class="text-gruvgray text-sm font-extralight">
			{date.getUTCDate().toString()}/{date.getUTCMonth().toString()}/{date
				.getUTCFullYear()
				.toString()}
			{date.getUTCHours().toString().length < 2
				? `0${date.getUTCHours().toString()}`
				: date.getUTCHours().toString()}:{date.getUTCMinutes().toString().length < 2
				? `0${date.getUTCMinutes().toString()}`
				: date.getUTCMinutes().toString()}
			UTC
		</h2>
	</div>
	<div class="text-base text-justify">
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
			a {
				color: $gruv-blue2;
				text-decoration: underline;
				&:visited {
					color: $gruv-purple2;
				}
			}
		}
	}
</style>
