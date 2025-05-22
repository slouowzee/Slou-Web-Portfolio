// Animation d'écriture pour le terminal macOS/Linux
const texts = [
	"Étudiant", 
	"Développeur web front-end", 
	"Et back-end aussi", 
	"Designer web à temps perdu",
	"Fan de Terminal",
	"Passionné de UI/UX",
	"Créateur Web",
	"Chanteur de Métal"
];

const typingSpeed = 100; // ms par caractère
const erasingSpeed = 50; // ms par caractère 
const pauseDuration = 1800; // ms entre écriture et effacement

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function typeEffect() {
	const element = document.getElementById("hero__job");
	const currentText = texts[textIndex];
	
	if (!element) return; // Sécurité si l'élément n'existe pas
	
	// Préfixer le texte avec un indicateur de commande bash pour un style terminal
	const prefix = "$ ";
	
	// Si on attend avant de commencer à effacer ou écrire
	if (isWaiting) {
		setTimeout(() => {
			isWaiting = false;
			typeEffect();
		}, pauseDuration);
		return;
	}
	
	if (isDeleting) {
		// Mode effacement
		charIndex--;
	} else {
		// Mode écriture
		charIndex++;
	}
	
	// Mettre à jour le texte avec effet de clignotement du curseur
	element.innerHTML = `${prefix}${currentText.substring(0, charIndex)}<span class="cursor" style="display:inline-block;"></span>`;
	
	// Calculer le délai pour le prochain caractère
	let timeout = isDeleting ? erasingSpeed : typingSpeed;
	
	// Gérer la transition entre écriture et effacement
	if (!isDeleting && charIndex === currentText.length) {
		isWaiting = true;
		isDeleting = true;
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		textIndex = (textIndex + 1) % texts.length;
		isWaiting = true;
	}
	
	if (!isWaiting) {
		setTimeout(typeEffect, timeout);
	} else {
		typeEffect(); // Appelle immédiatement pour traiter l'attente
	}
}

// Attendre que le DOM soit chargé pour initialiser la machine à écrire
document.addEventListener('DOMContentLoaded', function() {
	// Ajouter un délai avant de commencer pour un effet réaliste
	setTimeout(typeEffect, 1000);
});
