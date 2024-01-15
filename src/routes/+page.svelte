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
						'images/sites/loeilalecoute0',
						'images/sites/loeilalecoute1',
						'images/sites/loeilalecoute2',
						'images/sites/loeilalecoute3',
						'images/sites/loeilalecoute4'
					]}
				>
					<p>
						Pendant plus de 15 ans l'association l'oeil à l'écoute a arpenté la Seine-saint-denis
						pour permettre à ses habitants de réaliser des émissions radiophoniques. L'association a
						cessé son activité en 2023. C'est à ce moment qu'ils m'ont contacté pour réaliser un
						site qui relate leurs actions et donne accés aux émissions.
					</p>
				</ProjectCard>
			</div>
			<div class="project-item">
				<ProjectCard
					src="https://arplastoc.com/"
					title="Arplastoc"
					images={[
						'images/sites/arplastoc0',
						'images/sites/arplastoc1',
						'images/sites/arplastoc2',
						'images/sites/arplastoc3',
						'images/sites/arplastoc4'
					]}
				>
					<p>
						Arplastoc a été réalisé pour une professeure d'arts plastiques. L'objectif était de
						réaliser un site qui soit l'extension de sa salle de classe. Donnant accès aux séances
						et aux travaux des élèves. C'est aussi un suport pouvant servir pendant les cours.
					</p>
				</ProjectCard>
			</div>
			<div class="project-item">
				<ProjectCard
					src="https://hadrientequi.net/"
					title="Hadrien Tequi"
					images={[
						'images/sites/hadrientequi0',
						'images/sites/hadrientequi1',
						'images/sites/hadrientequi2',
						'images/sites/hadrientequi3',
						'images/sites/hadrientequi4'
					]}
				>
					<p>
						Hadrien Tequi est artiste plasticien. Il m'a contacté pour que je réalise son portfolio.
						Le site devait avoir une identité forte liée à son univers et laisser suffisament de
						place à ses travaux pour s'exprimer.
					</p>
				</ProjectCard>
			</div>
			<div class="project-item">
				<ProjectCard
					src="https://prosper-merimee.com/"
					title="Société mérimée"
					images={[
						'images/sites/prosper-merimee0',
						'images/sites/prosper-merimee1',
						'images/sites/prosper-merimee2',
						'images/sites/prosper-merimee3',
						'images/sites/prosper-merimee4'
					]}
				>
					<p>
						La société Mérimée est constituée d'universitaire spécialistes de l'auteur. Les membres
						qui la composent étaient soucieux de permettre au plus grand nombre d'accéder à leurs
						travaux. L'objectif était de réaliser un site facile à maintenir et utile autant aux
						spécialistes de l'oeuvre de Mérimée qu'aux néophites.
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
