<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';
	import Header from '$lib/components/Header.svelte';

	import { page } from '$app/stores';
</script>

<div class="container bg-slate-50 h-screen min-w-full">
	<Header
		pageName={$page.url.pathname.split('/').at(1) ? `${$page.url.pathname.split('/').at(1)}` : ''}
	/>
	<slot />
</div>
