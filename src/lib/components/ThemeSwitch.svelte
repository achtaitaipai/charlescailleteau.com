<script lang="ts">
	import { clamp } from '$lib';
	import { tweened } from 'svelte/motion';

	type Vector = [number, number];

	let eyeOffset = tweened(50, { duration: 300 });
	let direction: Vector = [0, 0];
	let distanceFactor = 0;
	let mousePosition: Vector;
	let svgElement: SVGElement;

	$: {
		if (svgElement?.getBoundingClientRect && mousePosition) {
			const { left, top, width, height } = svgElement.getBoundingClientRect();
			const eyePosition: Vector = [left + width * 0.5, top + height * 0.5];

			const vectorBetween: Vector = [
				mousePosition[0] - eyePosition[0],
				mousePosition[1] - eyePosition[1]
			];
			const distanceBetween = Math.sqrt(
				vectorBetween[0] * vectorBetween[0] + vectorBetween[1] * vectorBetween[1]
			);
			direction = [vectorBetween[0] / distanceBetween, vectorBetween[1] / distanceBetween];
			distanceFactor = clamp(distanceBetween / document.body.clientWidth, 0, 1);
		}
	}

	const handleMouseMove = (e: MouseEvent) => {
		mousePosition = [e.clientX, e.clientY];
	};

	const handleClick = async () => {
		await eyeOffset.set(0);
		const theme = getTheme() === 'dark' ? 'light' : 'dark';
		setTheme(theme);
		await eyeOffset.set(50);
	};

	const getTheme = () => {
		if (localStorage.getItem('theme-preference'))
			return localStorage.getItem('theme-preference') === 'dark' ? 'dark' : 'light';
		else return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};

	const setTheme = (theme: string) => {
		localStorage.setItem('theme-preference', theme);
		document.documentElement.setAttribute('data-theme', theme);
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />

<button on:click={handleClick}>
	<svg
		viewBox="-50 -50 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		bind:this={svgElement}
	>
		<mask id="eye-mask">
			<rect x="0" y="0" width="100" height="100" fill="black" />
			<path
				d="M-45 0 Q 0 -{$eyeOffset}, 45 0 Q 0 {$eyeOffset}, -45 0 Z"
				stroke="none"
				fill="white"
				stroke-linejoin="round"
			/>
		</mask>
		<path
			d="M-45 0 Q 0 -{$eyeOffset}, 45 0 Q 0 {$eyeOffset}, -45 0 Z"
			stroke="currentColor"
			stroke-width="5"
			fill="none"
			stroke-linejoin="round"
		/>
		<g
			mask="url(#eye-mask)"
			style="transform:translate({direction[0] * distanceFactor * 7}%,{direction[1] *
				distanceFactor *
				8}%)"
			class="iris"
		>
			<circle cx="0" cy="0" r="18" fill="none" stroke="currentColor" stroke-width="5" />
			<circle
				cx="0"
				cy="0"
				r="8"
				stroke="none"
				fill="currentColor"
				style="transform:translate({direction[0] * distanceFactor * 7}%,{direction[1] *
					distanceFactor *
					8}%)"
			/>
		</g>
	</svg>
</button>

<style>
	button {
		background: transparent;
		border: none;
		cursor: pointer;
		color: inherit;
	}
	svg {
		font-size: var(--step-3);
	}
	.iris {
		transition: transform 0.1s;
	}
</style>
