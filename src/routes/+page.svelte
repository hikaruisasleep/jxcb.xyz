<script lang="ts">
	import viewport from '$lib/actions/useViewportAction';

	let heroIntersection: boolean;
	import { page } from '$app/stores';
</script>

<div
	class="bg fixed inset-0 h-screen w-full -z-30 transition-opacity duration-500"
	class:opacity-0={!heroIntersection}
>
	<span class="block relative gradient w-full h-full -z-10" />
	<div class="decorations fixed inset-0 h-screen w-full grid place-items-center">
		<div class="rotating-circles fixed inset-0 h-screen w-full grid place-items-center -z-20">
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
		<div
			class="shooting-stars inset-0 h-[50vh] w-[150%] grid place-items-center -translate-y-[50%] -rotate-45 lg:-translate-y-[25%] lg:-translate-x-[20%] lg:z-0 lg:h-[200vh]"
		>
			{#each Array.from(Array(20)) as _}
				<div class="star" />
			{/each}
		</div>
	</div>
	<div
		class="fixed bg-white w-full h-full z-1 inset-y-0 transition-slow opacity-0"
		class:opacity-100={pgPos > 1.5}
	/>
	<div
		class="fixed bg-[#282828] w-full h-full z-1 inset-y-0 transition-slow opacity-0"
		class:opacity-100={pgPos > 2.5}
	/>
	<div
		class="fixed bg-black w-full h-full z-1 inset-y-0 transition-slow opacity-0"
		class:opacity-100={pgPos > 3.5}
	/>
	<div
		class="fixed bg-[#d6eaff] w-full h-full z-1 inset-y-0 transition-slow opacity-0"
		class:opacity-100={pgPos > 4.5}
	/>
</div>

<main id="home" class="hero h-screen relative snap-start">
	<div class="container min-h-full min-w-full select-none static">
		<header
			class="hidden lg:flex flex-row flex-initial justify-between items-center px-24 py-3 fixed inset-[0_0_auto] max-h-min min-w-full transition-all duration-500 z-10"
			class:bg-slate-800={!heroIntersection}
		>
			<p
				class=" text-3xl text-white opacity-0 font-extrabold font-[Prompt] hover:brightness-110 transition-all duration-500"
				class:opacity-100={!heroIntersection}
			>
				<a href="#home">jxcb</a>
			</p>
			<nav>
				<ul class="text-lg flex flex-row justify-center items-center gap-5">
					<li
						class="bg-opacity-0 bg-gradient-to-br from-orange-700 to-violet-700 bg-clip-text hover:brightness-150 hover:bg-opacity-100 hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.4)] transition-all ease-in-out duration-500"
						class:text-white={!heroIntersection}
						class:text-black={heroIntersection}
					>
						<a href="#home">home</a>
					</li>
					<li
						class="bg-opacity-0 bg-gradient-to-br from-orange-700 to-violet-700 bg-clip-text hover:brightness-150 hover:bg-opacity-100 hover:text-transparent hover:drop-shadow-[0_0.25rem_3px_rgb(0_0_0_/_0.4)] transition-all ease-in-out duration-500"
						class:text-white={!heroIntersection}
						class:text-black={heroIntersection}
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
					class="title-main p-5 text-8xl lg:text-[12rem] text-transparent font-extrabold font-[Prompt,_sans-serif] animate-in bg-gradient-to-br from-orange-700 to-violet-700 lg:from-orange-950 lg:to-violet-950 bg-clip-text"
				>
					jxcb
				</h1>
				<div
					class="lg:visible invisible title-sub flex flex-row text-base animate-in text-[rgb(255_255_255_/_0.5)] -translate-y-[2rem] translate-x-1 lg:text-xl lg:translate-x-20 lg:-translate-y-10"
				>
					<span>(</span>
					<p>pronounced</p>
					<div class="rotate-effect m-0 p-0">
						<p class="inline absolute min-w-max">ja · cob</p>
						<p class="absolute min-w-max">/ˈdʒeɪkəb/</p>
					</div>
					<span class="close">)</span>
				</div>
			</div>
			<div class="text-lg">
				<ul
					class="main-skills flex flex-col flex-initial justify-center text-center lg:text-right align-middle lg:translate-x-8"
				>
					<li class="skill-child animate-in">
						<a href="#icarus" class="block transition-all">frontend developer · ui designer</a>
					</li>
					<li class="skill-child animate-in">
						<a href="#kreideprinz" class=" block transition-all">computer science student</a>
					</li>
					<li class="skill-child animate-in">
						<a href="#crystallize" class=" block transition-all">motion designer · photographer</a>
					</li>
					<li class="skill-child animate-in">
						<a href="#hikaru" class=" block transition-all">bedroom producer · vocal synth user</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<footer />
</main>
<section id="icarus" class="h-screen w-full snap-start snap-always">
	<div class="container grid place-items-center max-w-full h-full bg-opacity-0">
		<a href="icarus">icarus</a>
	</div>
</section>
<section id="kreideprinz" class="h-screen w-full snap-start snap-always">
	<div class="container grid place-items-center max-w-full h-full">
		<div>
			<a href="kreideprinz" class="text-[#ebdbb2] text-2xl">kreideprinz</a>
		</div>
	</div>
</section>
<section id="crystallize" class="h-screen w-full snap-start snap-always">
	<div class="container grid place-items-center max-w-full h-full">
		<svg height="100" width="100" class="border-white border-2" style="grid-area: 1 / 1 / 1 / 1;">
			<polygon
				points="50,0 100,30 100,70 50,100 0,70 0,25"
				class="fill-none stroke-white stroke-1"
			/>
		</svg>
		<div style="grid-area: 1 / 1 / 1 / 1;">
			<a href="crystallize">
				<p class="font-[SFMono] text-white text-3xl">crystallize</p>
				<p class="font-[SFMono] italic text-white">the power to give life through motion</p>
			</a>
		</div>
	</div>
</section>
<section id="hikaru" class="h-screen w-full snap-start snap-always">
	<div class="container grid place-items-center max-w-full h-full">
		<div>
			<p />
			<a href="hikaru">hikaru</a>
		</div>
	</div>
</section>

<svg class="w-0 h-0">
	<filter id="grain">
		<feTurbulence type="turbulence" baseFrequency="0.5" stitchTiles="stitch" />
		<feColorMatrix type="saturate" values="0" result="grain" />
	</filter>
</svg>

<style lang="scss">
	:global(html) {
		scroll-snap-type: y mandatory;
	}

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
			@media (min-width: 1024px) {
				& {
					background: linear-gradient(to right, rgb(30 41 59) 0 47.5%, rgb(212 212 216 / 0) 100%);
				}
			}
		}

		.transition-slow {
			transition-property: all;
			transition-timing-function: linear;
			transition-duration: 450ms;
		}
	}

	.title {
		.title-main {
			-webkit-text-stroke: 2px black;

			@media (min-width: 1024px) {
				& {
					-webkit-text-stroke: 2px white;
				}
			}
		}

		.title-sub {
			& * {
				transition: all 150ms ease-in-out;
			}
			.rotate-effect {
				transform-style: preserve-3d;
				transform: rotateX(0deg);
				:first-child {
					translate: 0.5ch 0;
				}
				:last-child {
					transform: rotateX(90deg);
					translate: 0 1ch;
				}
			}

			&:hover .rotate-effect {
				transform: rotateX(-90deg) translate(0.5ch);
				:first-child {
					translate: 1ch -1ch;
				}
				:last-child {
					translate: 0ch 0.8ch;
				}
			}

			.close {
				@media (min-width: 1024px) {
					margin-left: 5.38ch;
				}

				margin-left: 5.35ch;
			}

			&:hover .close {
				@media (min-width: 1024px) {
					transform: translateX(2.45ch);
				}

				transform: translateX(2.35ch);
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

		@for $i from 1 through 4 {
			.animate-in:nth-child(#{$i}) {
				-webkit-animation-delay: (#{($i + 3) * 100ms});
				animation-delay: (#{($i + 3) * 100ms});
			}
		}

		.transition-all {
			transition-timing-function: $expoOut;
		}

		@media (min-width: 1024px) {
			.skill-child:hover > a {
				--tw-translate-y: -0.25rem;
				transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
					skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
					scaleY(var(--tw-scale-y));
				--tw-drop-shadow: drop-shadow(0 0.25rem 3px rgb(0 0 0 / 0.2));
				--tw-brightness: brightness(1.1);
				filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
					var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)
					var(--tw-drop-shadow);
				--tw-gradient-from: #c2410c var(--tw-gradient-from-position);
				--tw-gradient-to: #6d28d9 var(--tw-gradient-to-position);
				--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
				background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
				background-clip: text;
				color: transparent;
			}
		}
	}

	.decorations {
		.animate {
			animation: blurToBlur 500ms ease-out both, rotate 5s linear infinite;
		}

		.animate-reverse {
			animation: blurToBlur 500ms ease-out both, rotate 5s linear infinite reverse;
		}

		.star {
			$shooting-time: 3000ms;

			$color-b: rgb(30 41 59);
			$color-w: rgb(212 212 216);

			position: absolute;
			left: 50%;
			top: 50%;
			height: 2px;
			background: linear-gradient(-45deg, $color-b, rgb(0 0 255 / 0));
			@media (min-width: 1024px) {
				background: linear-gradient(-45deg, $color-w, rgb(0 0 255 / 0));
			}
			border-radius: 100%;
			filter: drop-shadow(0 0 6px $color-b) blur(2px);
			@media (min-width: 1024px) {
				filter: drop-shadow(0 0 6px $color-w) blur(2px);
			}
			animation: tail $shooting-time ease-in-out infinite reverse,
				shooting $shooting-time ease-in-out infinite reverse;

			&::before {
				content: '';
				position: absolute;
				top: calc(50% - 1px);
				right: 100%;
				// width: 30px;
				height: 3px;
				background: linear-gradient(-45deg, rgb(0 0 255 / 0), $color-b, rgb(0 0 255 / 0));
				@media (min-width: 1024px) {
					background: linear-gradient(-45deg, rgb(0 0 255 / 0), $color-w, rgb(0 0 255 / 0));
				}
				transform: translateX(50%) rotateZ(45deg);
				border-radius: 100%;
				animation: shining $shooting-time ease-in-out infinite;
			}
			&::after {
				// CodePen Error
				// @extend .shooting_star::before;
				content: '';
				position: absolute;
				top: calc(50% - 1px);
				right: 100%;
				// width: 30px;
				height: 3px;
				background: linear-gradient(-45deg, rgb(0 0 255 / 0), $color-b, rgb(0 0 255 / 0));
				@media (min-width: 1024px) {
					background: linear-gradient(-45deg, rgb(0 0 255 / 0), $color-w, rgb(0 0 255 / 0));
				}
				transform: translateX(50%) rotateZ(45deg);
				border-radius: 100%;
				animation: shining $shooting-time ease-in-out infinite;
				transform: translateX(50%) rotateZ(-45deg);
			}

			@for $i from 1 through 20 {
				&:nth-child(#{$i}) {
					$delay: random(10000) + 30ms;
					top: calc(50% - #{random(400) - 200px});
					left: calc(50% - #{random(300) + 0px});
					animation-delay: $delay;

					&::before,
					&::after {
						animation-delay: $delay;
					}
				}
			}

			@keyframes tail {
				0% {
					width: 0;
				}

				30% {
					width: 100px;
				}

				100% {
					width: 0;
				}
			}

			@keyframes shining {
				0% {
					width: 0;
				}

				50% {
					width: 30px;
				}

				100% {
					width: 0;
				}
			}

			@keyframes shooting {
				0% {
					transform: translateX(0);
				}

				100% {
					transform: translateX(300px);
				}
			}
		}
	}
</style>
