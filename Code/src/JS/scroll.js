/**
 * Amélioration du défilement et de la navigation
 * Ce script gère le comportement du défilement et améliore l'expérience utilisateur
 */

document.addEventListener('DOMContentLoaded', function() {
    // Référence à la navbar
    const navbar = document.querySelector('.navbar');
    let lastScrollPosition = 0;
    let ticking = false;
    
    // Fonction pour gérer l'affichage/masquage de la navbar pendant le défilement
    function handleNavbarScrolling() {
        const currentScrollPosition = window.scrollY;
        
        // Ajouter une classe si on défile vers le bas et qu'on n'est pas tout en haut
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
            
            // Ajouter une classe quand on n'est pas en haut de page
            if (currentScrollPosition > 20) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
        
        lastScrollPosition = currentScrollPosition;
        ticking = false;
    }
    
    // Écouter l'événement de défilement
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleNavbarScrolling();
            });
            ticking = true;
        }
    });
    
    // Améliorer le comportement des liens d'ancrage
    const navLinks = document.querySelectorAll('.navbar__list a, .footer__nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Obtenir l'identifiant de la section cible
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calcul de l'offset pour qu'il y ait un peu d'espace entre la navbar et la section
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - navbarHeight - 20; // 20px d'espace supplémentaire
                    
                    // Animation de défilement
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Mise à jour de l'URL pour la navigation
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
    
    // Observer les sections pour mettre en évidence les liens dans la navbar
    const sections = document.querySelectorAll('section[id]');
    const navbarLinks = document.querySelectorAll('.navbar__list li a');
    
    const observerOptions = {
        rootMargin: '-60px 0px -85% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const correspondingLink = document.querySelector(`.navbar__list li a[href="#${id}"]`);
            
            if (entry.isIntersecting) {
                // Enlever la classe active de tous les liens
                navbarLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Ajouter la classe active au lien correspondant à la section
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
                
                // Ajouter une classe pour l'animation d'apparition
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observer chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Animation d'apparition des sections au défilement
    const fadeInElements = document.querySelectorAll('.abt__text, .stats-container, .techs__card__langage, .services__card, .project-card, .contact-container');
    
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                fadeObserver.unobserve(entry.target);
                
                // Animation spéciale pour les conteneurs de statistiques
                if (entry.target.classList.contains('stats-container')) {
                    // Activer les animations sur les éléments enfants
                    const statItems = entry.target.querySelectorAll('.stat-item');
                    statItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate-in');
                        }, index * 200); // Délai progressif
                    });
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    });
    
    fadeInElements.forEach(element => {
        element.classList.add('fade-in-element');
        fadeObserver.observe(element);
    });
});
