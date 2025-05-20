/**
 * Reset Mobile Menu
 * Force l'état initial du menu mobile à chaque chargement de page
 * et corrige les problèmes d'affichage potentiels
 */

(function() {
    // S'exécute immédiatement avant tout autre code
    const hamburger = document.querySelector('.navbar-hamburger');
    
    // Fonction pour définir la visibilité correcte du menu hamburger
    function setCorrectHamburgerDisplay() {
        // Ne pas utiliser de style inline pour s'assurer que les règles CSS sont appliquées
        if (hamburger) {
            hamburger.removeAttribute('style');
        }
    }
    
    // Exécuter immédiatement
    setCorrectHamburgerDisplay();
    
    // Garantir que le domaine d'application du style est correct même après le chargement complet
    window.addEventListener('DOMContentLoaded', setCorrectHamburgerDisplay);
    window.addEventListener('load', setCorrectHamburgerDisplay);
})();
