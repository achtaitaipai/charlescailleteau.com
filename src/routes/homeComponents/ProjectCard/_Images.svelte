<script lang="ts">
	import ResizeControl from './_ResizeControl.svelte';
	export let images: string[];
	let current = images.length - 1;
</script>

<div class="images-wrapper">
	{#each images as src, index}
		{#if current === index}
			<picture>
				<source type="image/webp" srcset="{src}.webp" />
				<img src="{src}.jpg" alt="Apperçu du site" />
			</picture>
		{/if}
	{/each}
	<ResizeControl min={0} max={images.length - 1} bind:value={current} />
</div>

<style>
	.images-wrapper {
		position: relative;
		background: var(--surface);
		border: 2px solid var(--surface);
	}
	picture {
		width: 100%;
		aspect-ratio: 16/9;
		height: auto;
		background: var(--surface);
	}
	img {
		margin-inline: auto;
		width: auto;
		height: 100%;
	}
</style>
