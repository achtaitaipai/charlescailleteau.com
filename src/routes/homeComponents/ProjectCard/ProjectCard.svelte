<script lang="ts">
	import Iframe from './_Iframe.svelte';
	import Images from './_Images.svelte';
	import { fade } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	export let images: string[];
	export let src: string;
	export let title: string;

	const descriptionId = crypto.randomUUID();

	let descriptionIsOpen = false;
	let wrapperWidth: number;
</script>

<div class="project-wrapper" bind:offsetWidth={wrapperWidth}>
	<div class="iframe">
		<Iframe {src} {title} {wrapperWidth} />
	</div>
	<div class="images">
		<Images {images} />
	</div>
	{#if descriptionIsOpen}
		<div class="description" transition:fade={{ duration: 300, easing: linear }} id={descriptionId}>
			<slot />
		</div>
	{/if}
	<button
		on:click={() => (descriptionIsOpen = !descriptionIsOpen)}
		class="more"
		aria-controls={descriptionId}
		aria-expanded={descriptionIsOpen}
		aria-label="afficher la description"
	>
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
	.iframe,
	.images {
		height: 100%;
	}
	.iframe {
		padding: var(--space-xs);
	}

	@media (width > 60rem) {
		.iframe {
			display: block;
		}
		.images {
			display: none;
		}
	}
	@media (width <= 60rem) {
		.iframe {
			display: none;
		}
		.images {
			display: block;
		}
	}
	.description {
		background: var(--surface);
		position: absolute;
		inset: 0;
		display: flex;
		padding: var(--space-s);
		padding-block-start: var(--space-l);
		overflow: scroll;
		min-height: 100%;
	}
	.more {
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
	.more svg {
		transition: transform 0.3s;
	}
</style>
