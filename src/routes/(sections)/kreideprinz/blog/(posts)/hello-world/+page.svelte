<script context="module">
	import hello
	export let title, date;
</script>

<h1>{title}</h1>
<h2>{date}</h2>

<slot />

<style lang="scss">
	h1 {
		font-size: 2.25rem;
		line-height: 2.5rem;
		color: $gruv-fg;
	}
	h2 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: $gruv-gray2;
	}
</style>
