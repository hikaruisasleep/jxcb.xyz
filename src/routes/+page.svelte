<div class="bg fixed inset-0 h-screen w-full -z-30">
	<span class="block relative gradient w-full h-full z-30" />
	<div class="decorations fixed inset-0 h-screen w-full -z-20 grid place-items-center">
		<div
			class="w-[60vw] aspect-square lg:w-[40vw] fixed -bottom-[30vw] lg:bottom-auto lg:-right-[20vw] animate"
		>
			<svg viewBox="0 0 200 200">
				<g class="fill-transparent stroke-1 stroke-slate-900">
					<path d="M 0 100 A 100 100 0 1 1 50 188" transform="translate(1 1) scale(0.98)" />
				</g>
			</svg>
		</div>
		<div
			class="w-[40vw] aspect-square lg:w-[25vw] fixed -bottom-[20vw] lg:bottom-auto lg:-right-[12.5vw] animate-reverse"
		>
			<svg viewBox="0 0 200 200" class="-rotate-45">
				<g class="fill-transparent stroke-1 stroke-slate-900">
					<path d="M 0 100 A 100 100 0 1 1 50 188" transform="translate(1 1) scale(0.98)" />
				</g>
			</svg>
		</div>
		<div
			class="w-[20vw] aspect-square lg:w-[10vw] fixed -bottom-[10vw] lg:bottom-auto lg:-right-[5vw] animate"
		>
			<svg viewBox="0 0 200 200" class="rotate-90">
				<g class="fill-transparent stroke-1 stroke-slate-900">
					<path d="M 0 100 A 100 100 0 1 1 50 188" transform="translate(1 1) scale(0.98)" />
				</g>
			</svg>
		</div>
	</div>
</div>
<section class="hero h-screen">
	<div class="container min-h-full min-w-full select-none">
		<header
			class="hidden lg:flex flex-row-reverse flex-initial justify-between items-center px-24 py-3 fixed inset-[0_0_auto] max-h-min min-w-full translate-y-[0.2rem]"
		>
			<nav>
				<ul class="text-lg flex flex-row justify-center items-center gap-5">
					<li
						class="hover:brightness-110 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
					>
						<a href="/">home</a>
					</li>
					<li
						class="hover:brightness-110 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
					>
						<a href="/about">about</a>
					</li>
				</ul>
			</nav>
		</header>

		<div class="grid place-items-center grid-flow-row lg:grid-flow-col h-screen w-full">
			<div
				class="title w-full flex flex-col items-center lg:items-start lg:max-w-[50%] lg:-translate-x-12 max-h-screen lg:text-white"
			>
				<p
					class="title-intro text-xl translate-y-[3.25rem] -translate-x-11 lg:text-2xl lg:translate-x-20 lg:translate-y-20 animate-in"
				>
					hi, I'm
				</p>
				<h1
					class="title-main p-5 text-8xl lg:text-[12rem] text-transparent font-extrabold font-[Prompt] animate-in bg-gradient-to-br from-orange-700 to-violet-700 lg:from-orange-950 lg:to-violet-950 bg-clip-text"
				>
					jxcb
				</h1>
			</div>
			<div class="text-lg">
				<ul
					class="main-skills flex flex-col flex-initial justify-center text-center lg:text-right align-middle lg:translate-x-8"
				>
					<li
						class="animate-in hover:-translate-y-1 hover:brightness-110 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
					>
						<a href="icarus">frontend developer · ui designer</a>
					</li>
					<li
						class="animate-in hover:-translate-y-1 hover:brightness-100 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
					>
						<a href="kreideprinz">computer science student</a>
					</li>
					<li
						class="animate-in hover:-translate-y-1 hover:brightness-100 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
					>
						<a href="crystallize">motion designer · photographer</a>
					</li>
					<li
						class="animate-in hover:-translate-y-1 hover:brightness-100 hover:bg-gradient-to-br from-orange-700 to-violet-700 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.2)] transition-all"
					>
						<a href="hikaru">bedroom producer · vocal synth user</a>
					</li>
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
	.bg {
		&::before,
		&::after {
			position: absolute;
			left: 0;
			top: 0;
			content: '';
			width: 100%;
			height: 100%;
			opacity: 0.5;
			z-index: 50;
		}
		&::before {
			filter: url(#grain);
		}

		background: rgb(212 212 216);

		.gradient {
			background: linear-gradient(to right, rgb(30 41 59) 0, rgb(212 212 216 / 0) 15% 100%);
		}

		@media (min-width: 1024px) {
			.gradient {
				background: linear-gradient(to right, rgb(30 41 59) 0 47.5%, rgb(212 212 216 / 0) 100%);
			}
		}
	}

	.title {
		.title-main {
			-webkit-text-stroke: 2px black;
		}

		@media (min-width: 1024px) {
			.title-main {
				-webkit-text-stroke: 2px white;
			}
		}

		.animate-in {
			animation: slideUpFade 500ms $expoOut both;
		}

		@for $i from 1 through 10 {
			.animate-in:nth-child(#{$i}) {
				-webkit-animation-delay: (#{$i * 250ms});
				animation-delay: (#{$i * 250ms});
			}
		}
	}

	.main-skills {
		.animate-in {
			animation: slideDownFade 500ms $expoOut both;
		}

		@for $i from 1 through 10 {
			.animate-in:nth-child(#{$i}) {
				-webkit-animation-delay: (#{($i + 3) * 100ms});
				animation-delay: (#{($i + 3) * 100ms});
			}
		}

		.transition-all {
			transition-timing-function: $expoOut;
		}
	}

	.decorations {
		.animate {
			animation: blurToBlur 500ms ease-out both, rotate 5s linear infinite;
		}

		.animate-reverse {
			animation: blurToBlur 500ms ease-out both, rotate 5s linear infinite reverse;
		}
	}
</style>
