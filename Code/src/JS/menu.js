/**
 * Menu.js - Gestion du menu mobile et navbar fixed
 * Ce script gère l'ouverture/fermeture du menu sur mobile et le comportement de la navbar au défilement
 */

document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.navbar-hamburger');
	const navList = document.querySelector('.navbar__list');
	const navbar = document.querySelector('.navbar');
	const closeButton = document.getElementById('mac-close');
	const minimizeButton = document.getElementById('mac-minimize');
	const maximizeButton = document.getElementById('mac-maximize');
	let lastScrollTop = 0;
	
	// Gestion du hamburger menu
	if (hamburger && navList) {
		hamburger.addEventListener('click', function() {
			navList.classList.toggle('active');
			
			// Animation des barres du hamburger
			const spans = hamburger.querySelectorAll('span');
			spans.forEach(span => span.classList.toggle('active'));
		});
		
		// Fermer le menu quand on clique sur un lien
		const navLinks = navList.querySelectorAll('a');
		navLinks.forEach(link => {
			link.addEventListener('click', function() {
				navList.classList.remove('active');
				const spans = hamburger.querySelectorAll('span');
				spans.forEach(span => span.classList.remove('active'));
			});
		});
	}
	
	// Navbar qui se cache/apparaît au scroll
	if (navbar) {
		window.addEventListener('scroll', function() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			
			// Si on est tout en haut, toujours montrer la navbar
			if (scrollTop <= 10) {
				navbar.style.transform = 'translateY(0)';
				return;
			}
			
			// Cache la navbar en scrollant vers le bas, la montre en scrollant vers le haut
			if (scrollTop > lastScrollTop) {
				// Scroll vers le bas
				navbar.style.transform = 'translateY(-100%)';
			} else {
				// Scroll vers le haut
				navbar.style.transform = 'translateY(0)';
			}
			
			lastScrollTop = scrollTop;
		});
	}
	
	// Gestion des boutons mac
	if (closeButton) {
		closeButton.addEventListener('click', function() {
			// Animation de fermeture
			document.body.classList.add('window-closing');
			setTimeout(() => {
				// Message amusant avant de fermer
				alert("Hé ! Ce site est trop cool pour être fermé ! 😎");
				document.body.classList.remove('window-closing');
			}, 300);
		});
	}
	
	if (minimizeButton) {
		minimizeButton.addEventListener('click', function() {
			// Animation de minimisation
			document.body.classList.add('window-minimizing');
			setTimeout(() => {
				document.body.classList.remove('window-minimizing');
				// Toggle une classe sur le body pour "minimiser" visuellement
				document.body.classList.toggle('minimized');
			}, 300);
		});
	}
	
	if (maximizeButton) {
		maximizeButton.addEventListener('click', function() {
			// Toggle fullscreen
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen().catch(err => {
					console.log(`Erreur: ${err.message}`);
				});
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
		});
	}
});
