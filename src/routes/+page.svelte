<script lang="ts">
	import { Iframe, ThemeSwitch } from '$lib';
</script>

<main>
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
					Mon expertise en design et en développement me permettra d'accompagner mes clients pour
					concevoir le petit coin d'internet qui correspondra à ce qu'ils font et à ce qu'ils sont.
				</p>
			</div>
		</div>
	</div>

	<div class="flow projects">
		<div class="projects-wrapper flow" style="--flow-space:var(--space-l);">
			<div class="project-item">
				<Iframe src="https://hadrientequi.net/" title="Hadrien Tequi">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</Iframe>
			</div>
			<div class="project-item">
				<Iframe src="https://prosper-merimee.com/" title="Hadrien Tequi">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</Iframe>
			</div>
			<div class="project-item">
				<Iframe src="https://arplastoc.com/" title="Hadrien Tequi">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</Iframe>
			</div>
			<div class="project-item">
				<Iframe src="https://loeilalecoute.fr/" title="Hadrien Tequi">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</Iframe>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		background: var(--primary);
	}
	.hero {
		background: linear-gradient(to right, var(--primary) 50%, var(--surface) 50%);
		min-height: 100vh;
		padding-inline: var(--space-xl);
		padding-block-end: var(--space-xl);
		display: flex;
	}

	.hero-container {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	header {
		display: flex;
		justify-content: space-between;
		padding-block-start: var(--space-xl);
		padding-block-start: var(--space-xl);
		background-color: var(--surface);
		align-items: center;
		padding-inline: var(--space-s);
		padding-block-end: var(--space-s);
	}
	h1 {
		font-size: var(--step-4);
	}
	.description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		max-width: 66ch;
		align-self: flex-end;
		padding: var(--space-s);
		background: var(--surface);
		margin-block-start: -2px;
		position: relative;
	}

	.projects {
		z-index: 1;
		padding-block: var(--space-xl);
	}
	.projects-wrapper {
		padding-inline: var(--space-l);
	}

	.project-item {
		background: linear-gradient(to right, var(--primary) 50%, var(--surface) 50%);
		background: var(--surface);
		top: 0;
	}

	.project-item p {
		font-size: var(--step-3);
		margin-inline: auto;
		text-align: justify;
	}
</style>
