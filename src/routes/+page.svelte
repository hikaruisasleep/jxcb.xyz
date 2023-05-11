<section class="hero h-screen">
	<div class="container bg-zinc-300 min-h-full min-w-full grid place-items-center relative -z-50">
		<header
			class="hidden lg:flex flex-initial justify-between items-center px-24 py-3 fixed top-0 left-0 max-h-min min-w-full"
		>
			<p class="text-3xl font-bold align-middle">jxcb</p>
			<nav>
				<ul class="text-lg flex flex-row justify-center items-center gap-5">
					<li><a href="/">home</a></li>
					<li><a href="/about">about</a></li>
				</ul>
			</nav>
		</header>
		<div class="w-full flex flex-col items-center lg:items-start lg:max-w-[50%] lg:-translate-x-20">
			<div>
				<p class="text-lg translate-y-14 translate-x-10">hi, I'm</p>
				<h1 class="text-9xl text-transparent font-extrabold main-title">jxcb</h1>
			</div>
			<span
				class="gradient hidden bg-slate-800 lg:block lg:max-w-screen w-screen min-h-[200vw] fixed top-0 left-0 -z-10"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	h1.main-title {
		-webkit-text-stroke: 2px black;
	}

	span.gradient {
		filter: blur(5rem);
		transform: translate(calc(-50% + 5rem), -25%);
	}
</style>
