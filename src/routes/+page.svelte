<script lang="ts">
	import { Iframe } from '$lib';
	import Hero from './homeComponents/Hero.svelte';
</script>

<main>
	<Hero />
	<div class=" projects">
		<div class="projects-wrapper flow" style="--flow-space:var(--space-l);">
			<div class="project-item">
				<Iframe src="https://loeilalecoute.fr/" title="Hadrien Tequi">
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
		</div>
	</div>
</main>

<style>
	main {
		background: var(--primary);
	}

	.projects {
		z-index: 1;
		padding-block: var(--space-xl);
	}
	.projects-wrapper {
		padding-inline: var(--space-s);
		max-width: 80rem;
		margin-inline: auto;
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
		line-height: 1.2;
	}
</style>
