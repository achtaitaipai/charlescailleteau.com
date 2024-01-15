<script lang="ts">
	import ResizeControl from './_ResizeControl.svelte';
	export let images: string[];
	let current = images.length - 1;
</script>

<div class="images-wrapper">
	{#each images as src, index}
		{#if current === index}
			<img {src} alt="" />
		{/if}
	{/each}
	<ResizeControl min={0} max={images.length - 1} bind:value={current} />
</div>

<style>
	.images-wrapper {
		height: 100%;
		position: relative;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
