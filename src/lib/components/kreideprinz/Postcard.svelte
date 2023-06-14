<script lang="ts">
	export let title: string, description: string, link: string;
</script>

<a href={link}>
	<div class="min-w-full bg-gruvfg aspect-[6/1]">
		<p class="font-bold text-xl text-gruvbg">{title}</p>
		<p class="font-extralight text-sm text-gruvgray">{description}</p>
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
