/**
 * Animations.js - Gestion des animations pour le thème
 * Ce script améliore les animations spécifiques au thème clair
 */

document.addEventListener('DOMContentLoaded', function() {
	// Détection du changement de thème
	const themeSwitcher = document.querySelector('.theme-switcher');
	
	if (themeSwitcher) {
		themeSwitcher.addEventListener('click', function() {
			// Ajouter une classe d'animation au body lors du changement de thème
			document.body.classList.add('theme-transition');
			
			// Animer les éléments de la page
			animateElements();
			
			// Retirer la classe après la transition
			setTimeout(() => {
				document.body.classList.remove('theme-transition');
			}, 800);
		});
	}
	
	// Animation des éléments lorsqu'on change de thème
	function animateElements() {
		// Animer les titres
		const titles = document.querySelectorAll('h1, h2, h3');
		titles.forEach((title, index) => {
			setTimeout(() => {
				title.classList.add('animate-fade');
				setTimeout(() => {
					title.classList.remove('animate-fade');
				}, 500);
			}, index * 100);
		});
		
		// Animer les cartes de projet avec délai
		const cards = document.querySelectorAll('.project-card, .services__card__static__website, .services__card__coming__soon');
		cards.forEach((card, index) => {
			setTimeout(() => {
				card.classList.add('animate-scale');
				setTimeout(() => {
					card.classList.remove('animate-scale');
				}, 500);
			}, 200 + index * 120);
		});
		
		// Animer les sections avec délai
		const sections = document.querySelectorAll('section');
		sections.forEach((section, index) => {
			setTimeout(() => {
				section.classList.add('animate-opacity');
				setTimeout(() => {
					section.classList.remove('animate-opacity');
				}, 600);
			}, 100 + index * 150);
		});
	}
});
