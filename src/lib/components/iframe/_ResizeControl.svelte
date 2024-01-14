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
		display: none;
	}
	@media (min-width: 50rem) {
		div {
			display: flex;
		}
	}
	div {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
		background: var(--surface);
		flex-direction: column;
		gap: var(--space-xs);
		padding-block: var(--space-s);
		border: 2px solid var(--primary);
		border-bottom: none;
		width: 20rem;
		justify-content: center;
		align-items: center;
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
		width: 15rem;
	}

	input:focus {
		outline: none;
	}
	input::-webkit-slider-runnable-track {
		background-color: currentColor;
		height: 0.1rem;
	}

	/* slider thumb */
	input::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		transform: translateY(-50%);

		/*custom styles*/
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

	/******** Firefox styles ********/
	/* slider track */
	input::-moz-range-track {
		background-color: currentColor;
		border-radius: 0.5rem;
		height: 0.5rem;
	}

	/* slider thumb */
	input::-moz-range-thumb {
		border: none; /*Removes extra border that FF applies*/
		border-radius: 0; /*Removes default border-radius that FF applies*/

		/*custom styles*/
		background-color: #5cd5eb;
		height: 0.8rem;
		width: 0.8rem;
	}

	input[type='range']:focus::-moz-range-thumb {
		border: 1px solid currentColor;
		outline: solid currentColor;
		outline-offset: 0.125rem;
	}
</style>
