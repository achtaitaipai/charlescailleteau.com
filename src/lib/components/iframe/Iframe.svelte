<script lang="ts">
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import ResizeControl from './_ResizeControl.svelte';
	export let src: string;
	export let title: string;
	let descriptionIsOpen = false;
	let iframeWidth = 100;
	let wrapperWidth: number;
	$: minWidth = wrapperWidth > 0 ? Math.ceil((320 / wrapperWidth) * 100) : 50;
</script>

<div class="project-wrapper" bind:offsetWidth={wrapperWidth}>
	<div class="iframe-wrapper">
		<iframe {src} {title} frameborder="0" style="--_width:{iframeWidth}"></iframe>
	</div>
	<ResizeControl min={minWidth} max={100} bind:value={iframeWidth} />
	{#if descriptionIsOpen}
		<div class="description" transition:slide={{ duration: 300, easing: linear, axis: 'y' }}>
			<slot />
		</div>
	{/if}
	<button on:click={() => (descriptionIsOpen = !descriptionIsOpen)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			width="1em"
			height="1em"
			style="transform:rotate({descriptionIsOpen ? '45deg' : 0});"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</button>
</div>

<style>
	.project-wrapper {
		position: relative;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
	}
	.iframe-wrapper {
		padding: var(--space-s);
		height: 100%;
	}
	iframe {
		width: calc(1% * var(--_width));
		height: 100%;
		margin-inline: auto;
		scroll-behavior: contain;
	}

	.description {
		background: var(--surface);
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		padding: var(--space-s);
	}

	button {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		background: var(--surface);
		color: inherit;
		border: 2px solid var(--primary);
		border-top: none;
		padding: var(--space-3xs);
		cursor: pointer;
	}
	button svg {
		transition: transform 0.3s;
	}
</style>
