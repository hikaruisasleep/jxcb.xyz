<script lang="ts">
	import '$lib/styles/scss.scss';
	import '$lib/styles/tailwind.postcss';
</script>

<svelte:head>
	<title>jxcb | kreideprinz</title>
</svelte:head>

<div class="container h-[100dvh] min-w-full">
	<main
		class="h-full grid place-items-center grid-flow-row grid-rows-[repeat(10,_minmax(0,_1fr))] bg-gruvbg text-gruvfg px-10 select-none"
	>
		<div class="title flex flex-row items-center gap-24 row-start-4 row-span-2">
			<div>
				<h1 class="text-8xl font-bold font-[Prompt,_sans-serif] text-gruvorange2">jxcb</h1>
				<h2 class="text-lg translate-x-7 -translate-y-4 text-gruvyellow">project-kreideprinz</h2>
			</div>
			<nav class="h-full flex flex-col gap-2">
				<a href="kreideprinz/blog" class="navbarcoloring transition-all">blog</a>
				<a href="kreideprinz/projects" class="navbarcoloring transition-all">projects</a>
			</nav>
		</div>
		<div class="row-start-6 row-span-2">
			<div class="w-96 text-justify bg-gruvgray2 bg-opacity-50 p-3 border border-gruvgray">
				<p>
					<span class="text-gruvyellow">Project-Kreideprinz</span> is my attempt at documenting my
					life as a computer science student in Batam International University (UIB) in Batam,
					Indonesia.
					<br />
					Here you will find write-ups and class notes, assignments and projects, and general ramblings
					about school and computers.
				</p>
			</div>
		</div>
		<div class="row-start-[10] row-span-1">
			<nav class="socials flex flex-row justify-between items-center gap-6 transition-all">
				<a href="https://instagram.com/chalkprinze._"><i class="fa-brands fa-instagram fa-xl" /></a>
				<a href="https://youtube.com/@chalkprinze"><i class="fa-brands fa-youtube fa-xl" /></a>
			</nav>
		</div>
	</main>
</div>

<style lang="scss">
	.bg-gruvbg {
		background-color: $gruv-bg;
	}

	.bg-gruvgray2 {
		background-color: rgba($gruv-gray2, var(--tw-bg-opacity));
	}

	.text-gruvfg {
		color: $gruv-fg;
	}

	.text-gruvorange2 {
		color: $gruv-orange2;
	}

	.text-gruvyellow {
		color: $gruv-yellow1;
	}

	.border-gruvgray {
		border-color: $gruv-gray1;
	}

	.navbarcoloring {
		color: $gruv-blue2;

		&:hover {
			color: $gruv-purple2;
		}
	}
	@media (min-width: 1024px) {
		.title:hover > .socials {
			transform: translateX(-15rem);
			opacity: 1;
		}
	}
</style>
