<script lang="ts">
	import Iframe from './_Iframe.svelte';
	import Images from './_Images.svelte';
	import { fade } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { onMount } from 'svelte';
	export let images: string[];
	export let src: string;
	export let title: string;

	const descriptionId = crypto.randomUUID();

	let descriptionIsOpen = false;
	let wrapperWidth: number;
	let wrapperEl: HTMLElement;

	let onScreen: boolean;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting && onScreen === undefined) onScreen = false;
					else if (entry.isIntersecting) onScreen = true;
				});
			},
			{
				threshold: 0.35
			}
		);
		observer.observe(wrapperEl);
	});
</script>

<div
	class="project-wrapper"
	bind:offsetWidth={wrapperWidth}
	bind:this={wrapperEl}
	data-visible={onScreen}
>
	<div class="project-viewer desktop">
		<Iframe {src} {title} {wrapperWidth} />
	</div>
	<div class="project-viewer mobile">
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
			style="transform:rotate({descriptionIsOpen ? '-135deg' : 0});"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</button>
</div>

<style>
	.project-wrapper {
		position: relative;
	}

	.project-wrapper[data-visible='false'] > * {
		clip-path: rect(0 0 0 0);
	}
	.project-wrapper[data-visible='false']:nth-child(2n) > * {
		clip-path: rect(0 100% 0 100%);
	}
	.project-wrapper[data-visible='true'] > * {
		clip-path: rect(0 100% 100% 0);
		transition: clip-path 0.45s ease-out;
	}

	.desktop {
		padding: var(--space-xs);
		background: var(--surface);
		display: none;
	}

	.mobile {
		display: block;
	}

	@media (width > 60rem) {
		.desktop {
			display: block;
		}
		.mobile {
			display: none;
		}
	}

	.description {
		background: var(--surface);
		position: absolute;
		inset: 0;
		display: flex;
		padding: var(--space-s);
		padding-block: var(--space-m);
		overflow-y: auto;
		min-height: 100%;
	}
	.more {
		position: absolute;
		/* no buggy border */
		right: -1px;
		bottom: -1px;
		background: var(--primary);
		color: var(--surface);
		border: none;
		border-right: none;
		border-bottom: none;
		border-radius: 50% 0 0% 0%;
		padding: var(--space-3xs);
		cursor: pointer;
		font-size: var(--step-2);
	}
	.more svg {
		transition: transform 0.3s;
	}
</style>
