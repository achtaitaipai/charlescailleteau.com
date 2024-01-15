<script lang="ts">
	import ResizeControl from './_ResizeControl.svelte';

	export let src: string;
	export let title: string;
	export let wrapperWidth: number;

	let iframeWidth = 100;
	let isIframeActive = false;
	$: minWidth = wrapperWidth > 0 ? Math.ceil((320 / wrapperWidth) * 100) : 50;
</script>

<div class="container">
	<div class="iframeWrapper">
		<iframe {src} {title} frameborder="0" style="--_width:{iframeWidth}"></iframe>
	</div>
	{#if !isIframeActive}
		<button class="cache" on:click={() => (isIframeActive = true)} aria-label="Explorer l'aperçu" />
	{/if}
	<ResizeControl min={minWidth ?? 20} max={100} bind:value={iframeWidth} />
</div>

<style>
	.container {
		position: relative;
	}
	.iframeWrapper {
		width: 100%;
		height: auto;
		aspect-ratio: 16/9;
	}
	iframe {
		width: calc(1% * var(--_width));
		height: 100%;
		margin-inline: auto;
		display: block;
	}
	.cache {
		content: '';
		position: absolute;
		inset: 0;
		border: none;
		background: transparent;
		cursor: pointer;
	}
</style>
