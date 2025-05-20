/**
 * Utilities pour améliorer les performances et l'expérience utilisateur
 * Ce script fournit des fonctions d'optimisation pour le chargement et le rendu
 */

document.addEventListener('DOMContentLoaded', function() {
    // Préchargement des images
    const preloadImages = () => {
        const imagesToPreload = document.querySelectorAll('[data-preload]');
        
        imagesToPreload.forEach(img => {
            if (img.getAttribute('data-src')) {
                const preloadLink = document.createElement('link');
                preloadLink.href = img.getAttribute('data-src');
                preloadLink.rel = 'preload';
                preloadLink.as = 'image';
                document.head.appendChild(preloadLink);
                
                // Charger l'image réelle une fois que la page est prête
                setTimeout(() => {
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    img.removeAttribute('data-preload');
                }, 300); // Petit délai pour prioritiser le rendu initial
            }
        });
    };
    
    // Détection de l'appareil pour optimisations spécifiques
    const detectDevice = () => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
        
        // Ajouter des classes pour aider au CSS conditionnel
        if (isMobile) document.body.classList.add('is-mobile');
        if (isTablet) document.body.classList.add('is-tablet');
        
        // Optimisations spécifiques pour les appareils mobiles
        if (isMobile || isTablet) {
            // Limiter certaines animations sur mobile
            document.body.classList.add('reduce-animations');
        }
    };
    
    // Amélioration des transitions de page
    const enhanceNavigationTransitions = () => {
        // Petite animation lors de la navigation entre les sections
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    // Simple effet de fade-out/fade-in lors des changements de section
                    const sections = document.querySelectorAll('section');
                    sections.forEach(section => {
                        if (section.id !== this.getAttribute('href').substring(1)) {
                            section.style.opacity = '0.8';
                        }
                    });
                    
                    // Restaurer l'opacité après un court délai
                    setTimeout(() => {
                        sections.forEach(section => {
                            section.style.opacity = '1';
                            section.style.transition = 'opacity 0.3s ease';
                        });
                    }, 500);
                }
            });
        });
    };
    
    // Optimiser les transitions de couleur pour le mode sombre/clair
    const optimizeColorTransitions = () => {
        // Réduire la fluidité des transitions de couleur pour améliorer les performances
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--transition-speed', '0s');
        }
    };

    // Ajouter un masque de chargement entre les sections pour une navigation plus fluide
    const setupProgressionMask = () => {
        const mask = document.createElement('div');
        mask.classList.add('progression-mask');
        document.body.appendChild(mask);
        
        // Afficher le masque pendant les transitions importantes
        window.addEventListener('beforeunload', function() {
            mask.classList.add('active');
        });
    };
    
    // Exécution
    preloadImages();
    detectDevice();
    enhanceNavigationTransitions();
    optimizeColorTransitions();
    setupProgressionMask();
});
