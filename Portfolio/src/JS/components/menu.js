/**
 * Menu.js - Gestion du menu mobile et navbar fixed
 * Ce script gère l'ouverture/fermeture du menu sur mobile et le comportement de la navbar au défilement
 * Version complètement revue pour une meilleure expérience utilisateur
 */

document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    const hamburger = document.querySelector('.navbar-hamburger');
    const navCenter = document.querySelector('.navbar__center');
    const navList = document.querySelector('.navbar__list');
    const navbar = document.querySelector('.navbar');
    const closeButton = document.getElementById('mac-close');
    const minimizeButton = document.getElementById('mac-minimize');
    const maximizeButton = document.getElementById('mac-maximize');
    const navLinks = document.querySelectorAll('.navbar__list a');
    
    // Variables d'état
    let isMinimized = false;
    let isFullScreen = false;
    
    // Fonction pour fermer le menu mobile quand on redimensionne vers desktop
    function handleResize() {
        if (window.innerWidth > 768) {
            // Fermer le menu si ouvert et l'écran est redimensionné en desktop
            navCenter.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
    
    // Surveiller le redimensionnement pour fermer le menu si nécessaire
    window.addEventListener('resize', handleResize);
    
    // Fonction pour gérer le scroll du body (empêcher le scroll quand le menu mobile est ouvert)
    function toggleBodyScroll(disable) {
        if (disable) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Fonction pour fermer le menu mobile
    function closeMenu() {
        navCenter.classList.remove('active');
        hamburger.classList.remove('active');
        toggleBodyScroll(false);
    }
    
    // Gestion du menu hamburger
    if (hamburger && navCenter) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navCenter.classList.toggle('active');
            hamburger.classList.toggle('active');
            toggleBodyScroll(navCenter.classList.contains('active'));
        });
        
        // Fermer le menu quand on clique sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Fermer le menu quand on clique ailleurs sur la page
        document.addEventListener('click', function(e) {
            if (navCenter.classList.contains('active') && 
                !navCenter.contains(e.target) && 
                e.target !== hamburger && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });
    }
    
    // Le comportement de la navbar au scroll est maintenant géré dans scroll-animations.js
    // Ce code a été commenté pour éviter les conflits
    
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
