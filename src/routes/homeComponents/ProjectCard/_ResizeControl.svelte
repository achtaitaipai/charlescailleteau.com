<script lang="ts">
	const id = crypto.randomUUID();
	export let min: number;
	export let max: number;
	export let value: number;
</script>

<div>
	<label for={id}>Redimensionner la page</label>
	<input type="range" {id} {min} {max} bind:value />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--space-2xs);
		width: min(80%, 20rem);
		margin-inline: auto;
		background: var(--surface);
		margin-block: var(--space-3xs);
		padding-block: var(--space-xs);
	}
	@media (width > 40rem) {
		div {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 0);
			border: 2px solid var(--primary);
		}
	}
	label {
		text-align: center;
		font-size: var(--step--1);
	}
	input {
		color: var(--primary);
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		width: min(15rem, 90%);
	}
	input:focus {
		outline: none;
	}
	input::-webkit-slider-runnable-track {
		background-color: currentColor;
		height: 0.3rem;
		border-radius: 0.15rem;
	}
	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		margin-top: -0.25rem;
		background-color: currentColor;
		border: var(--text);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
	}

	input:focus::-webkit-slider-thumb {
		border: 1px solid currentColor;
		outline: solid currentColor;
		outline-offset: 0.125rem;
	}
	input::-moz-range-track {
		background-color: currentColor;
		border-radius: 0.15rem;
		height: 0.3rem;
	}
	input::-moz-range-thumb {
		border: none;
		border-radius: 0;
		background-color: currentColor;
		height: 0.8rem;
		width: 0.8rem;
	}
	input[type='range']:focus::-moz-range-thumb {
		border: 1px solid currentColor;
		outline: solid currentColor;
		outline-offset: 0.125rem;
	}
</style>
