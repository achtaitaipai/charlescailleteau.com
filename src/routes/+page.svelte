<script lang="ts">
	import Hero from './homeComponents/Hero.svelte';
	import ProjectCard from './homeComponents/ProjectCard/ProjectCard.svelte';
</script>

<main>
	<Hero />
	<div class=" projects">
		<div class="projects-wrapper flow" style="--flow-space:var(--space-l);">
			<div class="project-item">
				<ProjectCard
					src="https://loeilalecoute.fr/"
					title="L'oeil à l'écoute"
					images={[
						'images/sites/loeilalecoute0.png',
						'images/sites/loeilalecoute1.png',
						'images/sites/loeilalecoute2.png',
						'images/sites/loeilalecoute3.png',
						'images/sites/loeilalecoute4.png'
					]}
				>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</ProjectCard>
			</div>
			<div class="project-item">
				<ProjectCard
					src="https://arplastoc.com/"
					title="Arplastoc"
					images={[
						'images/sites/arplastoc0.png',
						'images/sites/arplastoc1.png',
						'images/sites/arplastoc2.png',
						'images/sites/arplastoc3.png',
						'images/sites/arplastoc4.png'
					]}
				>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</ProjectCard>
			</div>
			<div class="project-item">
				<ProjectCard
					src="https://hadrientequi.net/"
					title="Hadrien Tequi"
					images={[
						'images/sites/hadrientequi0.png',
						'images/sites/hadrientequi1.png',
						'images/sites/hadrientequi2.png',
						'images/sites/hadrientequi3.png',
						'images/sites/hadrientequi4.png'
					]}
				>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</ProjectCard>
			</div>
			<div class="project-item">
				<ProjectCard
					src="https://prosper-merimee.com/"
					title="Société mérimée"
					images={[
						'images/sites/prosper-merimee0.png',
						'images/sites/prosper-merimee1.png',
						'images/sites/prosper-merimee2.png',
						'images/sites/prosper-merimee3.png',
						'images/sites/prosper-merimee4.png'
					]}
				>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit iusto aliquid,
						cupiditate, dolore incidunt eaque laudantium adipisci fuga veniam beatae blanditiis
						minima odio maiores perspiciatis, quaerat deleniti eos distinctio!
					</p>
				</ProjectCard>
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
		padding-inline: var(--space-3xs);
		max-width: 80rem;
		margin-inline: auto;
	}
	@media (width > 25rem) {
		.projects-wrapper {
			padding-inline: var(--space-s);
		}
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
