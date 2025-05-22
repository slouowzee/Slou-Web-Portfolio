/**
 * Loader - Animation de chargement inspirée d'un terminal
 * Ce script gère l'animation de chargement au style terminal au début du site
 */

document.addEventListener('DOMContentLoaded', function() {
	const loader = document.querySelector('.loader');
	const progressBar = document.querySelector('.loader__progress-bar');
	const messages = document.querySelectorAll('.loader__message .loader__text');
	
	if (!loader) return;
	
	// Simulation d'un vrai terminal avec typing effect
	function simulateTyping(element, text, typingSpeed = 20) {
		return new Promise(resolve => {
			let i = 0;
			
			// Effacer le texte existant
			element.textContent = '';
			
			// Ajouter les lettres une par une
			const interval = setInterval(() => {
				if (i < text.length) {
					element.textContent += text.charAt(i);
					i++;
				} else {
					clearInterval(interval);
					resolve();
				}
			}, typingSpeed);
		});
	}
	
	// Simuler l'exécution d'une commande avec délai
	async function simulateCommand(element, finalText, typingSpeed = 20, executionDelay = 300) {
		await simulateTyping(element, finalText, typingSpeed);
		return new Promise(resolve => setTimeout(resolve, executionDelay));
	}
	
	// Fonction principale d'animation
	async function animateLoader() {
		// Message 1 - CD commande
		await simulateCommand(messages[0], 'cd ~/SLouowze/Portfolio', 20, 300);
		
		// Message 2 - Install commande
		await simulateCommand(messages[1], 'npm install', 20, 800);
		
		// Message 3 - Success (apparaît directement)
		messages[2].textContent = '✓ Dépendances installées avec succès';
		await new Promise(resolve => setTimeout(resolve, 400));
		
		// Message 4 - Start commande
		await simulateCommand(messages[3], 'npm start', 20, 600);
		
		// Message 5 - Start success (apparaît directement)
		messages[4].textContent = '✓ Application démarrée sur http://localhost:3000';
		await new Promise(resolve => setTimeout(resolve, 400));
		
		// Message 6 - Chargement
		await simulateCommand(messages[5], 'Chargement du portfolio...', 20, 300);
		
		// Animation de la barre de progression
		let width = 0;
		const interval = setInterval(function() {
			if (width >= 100) {
				clearInterval(interval);
				
				// Message de fin de chargement
				messages[5].textContent = 'Portfolio chargé avec succès! Bienvenue!';
				
				// Attendre un peu avant de cacher le loader
				setTimeout(function() {
					loader.classList.add('hidden');
					
					// Supprimer le loader après l'animation de disparition
					setTimeout(function() {
						loader.style.display = 'none';
					}, 500);
				}, 800);
			} else {
				// Progression avec variations aléatoires pour un effet plus réaliste
				width += Math.random() * 3 + 0.5;
				if (width > 100) width = 100;
				if (progressBar) progressBar.style.width = width + '%';
			}
		}, 80);
	}
	
	// Commencer l'animation
	setTimeout(animateLoader, 400);
});
