<div class="bg gradient fixed top-0 left-0 -z-50 h-screen w-full" />
<section class="hero h-screen">
	<div class="container min-h-full min-w-full">
		<header
			class="hidden lg:flex flex-initial justify-between items-center px-24 py-3 fixed top-0 left-0 max-h-min min-w-full z-10"
		>
			<p class="text-3xl font-bold align-middle">jxcb</p>
			<nav>
				<ul class="text-lg flex flex-row justify-center items-center gap-5">
					<li><a href="/">home</a></li>
					<li><a href="/about">about</a></li>
				</ul>
			</nav>
		</header>

		<div class="grid place-items-center grid-flow-row lg:grid-flow-col h-screen w-full">
			<div
				class="w-full flex flex-col items-center lg:items-start lg:max-w-[50%] lg:-translate-x-12 max-h-screen"
			>
				<p
					class="text-xl translate-y-8 -translate-x-11 lg:text-2xl lg:translate-x-16 lg:translate-y-16 animate-[slideUpFade_1s_ease-out_both]"
				>
					hi, I'm
				</p>
				<h1
					class="text-8xl lg:text-[12rem] text-transparent font-extrabold main-title font-[Prompt] animate-[slideUpFade_1s_ease-out_1s_forwards]"
				>
					jxcb
				</h1>
			</div>
			<div class="text-lg">
				<ul
					class="flex flex-col flex-initial justify-center items-end text-right align-middle lg:translate-x-8"
				>
					<li>junior fullstack dev</li>
					<li>motion designer</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<svg class="h-0 w-0">
	<filter id="grain">
		<feTurbulence type="turbulence" baseFrequency="0.65" />
	</filter>
</svg>

<style lang="scss">
	h1.main-title {
		-webkit-text-stroke: 2px black;
	}

	.bg {
		z-index: -999;
		&::before,
		&::after {
			position: absolute;
			left: 0;
			top: 0;
			content: '';
			width: 100%;
			height: 100%;
			z-index: 9999;
			opacity: 0.5;
		}
		&::before {
			filter: url(#grain);
		}

		&.gradient {
			background: linear-gradient(to right, rgb(30 41 59) 0, rgb(212 212 216) 15% 100%);
		}

		@media (min-width: 1024px) {
			&.gradient {
				background: linear-gradient(to right, rgb(30 41 59) 0 47.5%, rgb(212 212 216) 100%);
			}
		}
	}
</style>
