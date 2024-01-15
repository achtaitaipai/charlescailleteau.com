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
		height: 100%;
		position: relative;
	}
	picture {
		width: 100%;
		height: 100%;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
