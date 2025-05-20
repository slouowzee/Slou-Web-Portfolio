/**
 * main.js - Point d'entrée JavaScript
 * Ce fichier organise et initialise tous les modules du site
 * Il utilise la fonction import pour importer tous les autres scripts nécessaires
 */

// ===================================
// Import des composants
// ===================================
import './components/loader.js';
import './components/typing.js';
import './components/menu.js';
import './components/form.js';

// ===================================
// Import des utilitaires
// ===================================
import './utils/reset-mobile-menu.js'; // Tout au début pour corriger l'affichage du menu mobile
import './utils/theme.js';
import './utils/copyright.js';
import './utils/language.js';
import './utils/load.js';
import './utils/performance.js';
import './utils/accessibility.js';

// ===================================
// Import des animations
// ===================================
import './animations/scroll-animations.js';
import './animations/page-animations.js';
import './animations/ui-effects.js';
import './animations/about-animations.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio chargé avec succès ! 🚀');
    
    // ===================================
    // Initialisation des composants
    // ===================================
    initLoader();          // Animation de chargement initial
    initMenuMobile();      // Menu mobile hamburger
    initTypingEffect();    // Animation de typing dans le hero
    initFormHandlers();    // Gestion des formulaires
    
    // ===================================
    // Initialisation des utilitaires
    // ===================================
    initThemeSwitcher();   // Changement de thème clair/sombre
    initLanguageSwitcher();// Changement de langue
    initCopyright();       // Mise à jour automatique du copyright
    initLoadMoreButton();  // Bouton "charger plus"
    initPerformance();     // Optimisations de performances
    
    // ===================================
    // Initialisation des animations
    // ===================================
    initScrollAnimations();// Animations au scroll
    initPageAnimations();  // Autres animations de la page
    initUIEffects();       // Effets d'interface utilisateur avancés
    initAboutAnimations(); // Animations de la section À propos
});

/**
 * Fonctions d'initialisation des différents modules
 * Ces fonctions servent de pont entre ce fichier principal et les modules spécifiques
 */

// ===================================
// Initialisation des composants
// ===================================

function initLoader() {
    // Le loader est géré automatiquement lors du chargement de son script
    console.log('Loader initialisé');
}

function initMenuMobile() {
    // Le menu mobile est géré automatiquement lors du chargement de son script
    console.log('Menu mobile initialisé');
}

function initTypingEffect() {
    // L'effet de typing est géré par typing.js
    console.log('Effet de typing initialisé');
}

function initFormHandlers() {
    // La gestion des formulaires est gérée par form.js
    console.log('Gestion des formulaires initialisée');
}

// ===================================
// Initialisation des utilitaires
// ===================================

function initThemeSwitcher() {
    // Le changement de thème est géré par theme.js
    console.log('Changement de thème initialisé');
}

function initLanguageSwitcher() {
    // Le changement de langue est géré par language.js
    console.log('Changement de langue initialisé');
}

function initCopyright() {
    // La mise à jour du copyright est gérée par copyright.js
    console.log('Copyright initialisé');
}

function initLoadMoreButton() {
    // Le bouton "charger plus" est géré par load.js
    console.log('Bouton "charger plus" initialisé');
}

// ===================================
// Initialisation des animations
// ===================================

function initScrollAnimations() {
    // Les animations au scroll sont gérées par scroll-animations.js
    console.log('Animations au scroll initialisées');
}

function initPageAnimations() {
    // Les autres animations sont gérées par page-animations.js
    console.log('Animations de page initialisées');
}

function initUIEffects() {
    // Les effets UI sont gérés par ui-effects.js
    console.log('Effets UI avancés initialisés');
}

function initAboutAnimations() {
    // Les animations de la section À propos sont gérées par about-animations.js
    console.log('Animations de la section À propos initialisées');
}

// ===================================
// Initialisation des performances
// ===================================

function initPerformance() {
    // Les optimisations de performance sont gérées par performance.js
    console.log('Optimisations de performance initialisées');
}