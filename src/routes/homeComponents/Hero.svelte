<script lang="ts">
	import { ThemeSwitch } from '$lib';
</script>

<div class="hero">
	<div class="hero-container wrapper">
		<header>
			<div>
				<h1>Charles Cailleteau</h1>
				<a href="mailto:charles.cailleteau@gmail.com">charles.cailleteau@gmail.com</a>
			</div>
			<ThemeSwitch />
		</header>
		<div class="description flow">
			<p>Né en 1993 à Paris.</p>
			<p>Je pense que le web est un merveilleux moyen de partager savoir et information.</p>
			<p>
				Mon expertise en design et en développement me permet d'accompagner mes clients pour
				concevoir le petit coin d'internet qui correspond à ce qu'ils font et à ce qu'ils sont.
			</p>
		</div>
	</div>
</div>

<style>
	.hero {
		background: linear-gradient(to right, var(--primary) 50%, var(--surface) 50%);
		min-height: 100vh;
		padding-block-end: var(--space-xl);
		display: flex;
	}

	.hero-container {
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}
	header {
		display: flex;
		gap: var(--space-l);
		justify-content: space-between;
		align-items: center;
		padding-block: var(--space-xl) var(--space-m);
		background-color: var(--surface);
		padding-inline: var(--space-3xs);
	}

	header h1 {
		font-size: var(--step-4);
		font-size: var(--step-3);
	}

	header a {
		font-size: var(--step--1);
	}

	.description {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		height: 100%;
		max-width: 66ch;
		align-self: flex-end;
		padding-inline: var(--space-3xs);
		padding-block: var(--space-s);
		background: var(--surface);
		margin-block-start: -2px;
		position: relative;
	}

	@media (min-width: 40rem) {
		header {
			padding-inline: var(--space-xs);
		}
		header h1 {
			font-size: var(--step-4);
		}
		header a {
			font-size: var(--step-1);
		}
		.description {
			padding-inline: var(--space-xs);
		}
	}
</style>
