/**
 * About Animations - Animations spécifiques pour la section À propos
 * Ce script active les animations pour la section À propos
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animer les éléments de texte lors du défilement
    const animateTextElements = () => {
        const textElements = document.querySelectorAll(
            '.abt__text__peak, .abt__text__interet li, .about__text__heading, .about__stats__heading'
        );
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Ajouter un délai progressif pour les listes
                    if (entry.target.tagName === 'LI') {
                        const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 150);
                    } else {
                        entry.target.classList.add('visible');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        textElements.forEach(el => observer.observe(el));
    };
    
    // Animation supplémentaire lors du clic sur "load more"
    const setupLoadMoreAnimation = () => {
        const loadMoreButton = document.getElementById('load-more');
        const moreInfo = document.getElementById('more-info');
        
        if (loadMoreButton && moreInfo) {
            loadMoreButton.addEventListener('click', function() {
                // L'animation de base est dans load.js, ajoutons des effets supplémentaires
                this.classList.add('button-clicked');
                
                // Animer les nouveaux éléments après l'expansion
                setTimeout(() => {
                    const newElements = moreInfo.querySelectorAll('.abt__text__peak, .abt__text__interet li');
                    newElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, index * 150);
                    });
                }, 300);
                
                // Rétablir l'état du bouton après l'animation
                setTimeout(() => {
                    this.classList.remove('button-clicked');
                }, 1000);
            });
        }
    };
    
    // Animation pour les stats
    const animateStats = () => {
        const statsContainer = document.querySelector('.stats-container');
        const statItems = document.querySelectorAll('.stat-item');
        
        if (statsContainer && statItems.length) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    statItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate-in');
                        }, index * 150);
                    });
                    observer.unobserve(statsContainer);
                }
            }, { threshold: 0.3 });
            
            observer.observe(statsContainer);
        }
    };
    
    // Effet de focus pour les statistiques
    const setupStatsHoverEffects = () => {
        const statItems = document.querySelectorAll('.stat-item');
        
        statItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                statItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        otherItem.style.opacity = '0.7';
                        otherItem.style.transform = 'scale(0.95)';
                    }
                });
            });
            
            item.addEventListener('mouseleave', function() {
                statItems.forEach(otherItem => {
                    otherItem.style.opacity = '';
                    otherItem.style.transform = '';
                });
            });
        });
    };
    
    // Initialisation
    animateTextElements();
    setupLoadMoreAnimation();
    animateStats();
    setupStatsHoverEffects();
});
