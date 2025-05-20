/**
 * Accessibilité - Améliorer l'accessibilité du site
 * Ce script ajoute des fonctionnalités pour rendre le site plus accessible
 */

document.addEventListener('DOMContentLoaded', function() {
    // Ajouter des attributs ARIA aux éléments interactifs
    function enhanceAccessibility() {
        // Améliorer la navigation au clavier
        const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
        interactiveElements.forEach(element => {
            // S'assurer que tous les éléments interactifs ont un tabindex approprié
            if (!element.hasAttribute('tabindex') && !element.disabled) {
                element.setAttribute('tabindex', '0');
            }
            
            // Ajouter des attributs ARIA manquants
            if (element.tagName === 'BUTTON' && !element.hasAttribute('aria-label')) {
                const buttonText = element.textContent.trim();
                if (buttonText) {
                    element.setAttribute('aria-label', buttonText);
                }
            }
        });
        
        // Améliorer les images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.alt) {
                const imgParent = img.parentElement;
                const nearbyText = imgParent?.textContent?.trim();
                if (nearbyText) {
                    img.alt = `Image liée à: ${nearbyText.substring(0, 50)}${nearbyText.length > 50 ? '...' : ''}`;
                } else {
                    img.alt = "Image décorative"; // Image décorative par défaut
                }
            }
        });
        
        // Améliorer les formulaires
        const formInputs = document.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            const id = input.id;
            if (id) {
                const label = document.querySelector(`label[for="${id}"]`);
                if (!label) {
                    // Créer un label si manquant
                    const newLabel = document.createElement('label');
                    newLabel.setAttribute('for', id);
                    newLabel.textContent = input.placeholder || id;
                    input.parentNode.insertBefore(newLabel, input);
                }
            }
        });
    }
    
    // Supporter la navigation au clavier
    function enhanceKeyboardNavigation() {
        // Ajouter un focus visuel plus évident
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Gérer la touche Échap pour fermer les éléments ouverts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                // Fermer le menu mobile s'il est ouvert
                const mobileMenu = document.querySelector('.navbar__list.active');
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                    document.querySelector('.navbar-hamburger').classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                // Autres éléments à fermer avec Échap peuvent être ajoutés ici
            }
        });
    }
    
    // Respect des préférences système
    function respectUserPreferences() {
        // Réduire le mouvement si demandé
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            document.body.classList.add('reduce-motion');
        }
        
        // Écouter les changements de préférence
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', function(e) {
            if (e.matches) {
                document.body.classList.add('reduce-motion');
            } else {
                document.body.classList.remove('reduce-motion');
            }
        });
    }
    
    // Améliorer la prise en charge de l'accessibilité de défilement
    function enhanceScrollAccessibility() {
        // S'assurer que les sections ont des ID appropriés
        document.querySelectorAll('section:not([id])').forEach((section, index) => {
            section.id = `section-${index + 1}`;
        });
        
        // Ajouter des repères pour les lecteurs d'écran
        document.querySelectorAll('section[id]').forEach(section => {
            if (!section.hasAttribute('aria-label')) {
                const heading = section.querySelector('h1, h2, h3');
                if (heading) {
                    section.setAttribute('aria-label', heading.textContent);
                }
            }
        });
    }
    
    // Exécution des fonctions
    enhanceAccessibility();
    enhanceKeyboardNavigation();
    respectUserPreferences();
    enhanceScrollAccessibility();
});
