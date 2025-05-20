/**
 * UI Effects - Effets d'interface utilisateur avancés
 * Ce script ajoute des effets visuels et des interactions dynamiques à l'interface
 */

document.addEventListener('DOMContentLoaded', function() {
    // Effet de parallaxe léger sur certains éléments
    const setupParallax = () => {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        if (parallaxElements.length > 0) {
            window.addEventListener('mousemove', function(e) {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                
                parallaxElements.forEach(element => {
                    const strength = element.getAttribute('data-parallax-strength') || 20;
                    const offsetX = (mouseX - 0.5) * strength;
                    const offsetY = (mouseY - 0.5) * strength;
                    
                    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                });
            });
        }
    };
    
    // Effet de filtre dynamique pour les projets
    const setupProjectFilters = () => {
        const filterButtons = document.querySelectorAll('.project-filter');
        const projects = document.querySelectorAll('.project-card');
        
        if (filterButtons.length > 0 && projects.length > 0) {
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    
                    // Mettre à jour l'état actif des boutons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filtrer les projets
                    projects.forEach(project => {
                        if (filter === 'all') {
                            project.style.display = 'block';
                        } else {
                            const projectTags = project.getAttribute('data-tags');
                            if (projectTags && projectTags.includes(filter)) {
                                project.style.display = 'block';
                            } else {
                                project.style.display = 'none';
                            }
                        }
                    });
                });
            });
        }
    };
    
    // Animations fluides des éléments de statistiques
    const animateStatistics = () => {
        const statValues = document.querySelectorAll('.stat-value');
        
        statValues.forEach(stat => {
            const targetValue = stat.textContent;
            
            // Si c'est une valeur numérique, animer le comptage
            if (!isNaN(parseInt(targetValue)) && targetValue.indexOf('+') === -1 && targetValue !== '∞') {
                const value = parseInt(targetValue);
                stat.textContent = '0';
                
                const observer = new IntersectionObserver(entries => {
                    if (entries[0].isIntersecting) {
                        let currentValue = 0;
                        const duration = 2000; // 2 secondes
                        const stepTime = Math.abs(Math.floor(duration / value));
                        
                        const timer = setInterval(() => {
                            currentValue += 1;
                            stat.textContent = currentValue;
                            
                            if (currentValue === value) {
                                clearInterval(timer);
                            }
                        }, stepTime);
                        
                        observer.unobserve(entries[0].target);
                    }
                }, { threshold: 0.5 });
                
                observer.observe(stat);
            }
        });
    };
    
    // Effet de texte machine à écrire pour les sections spécifiques
    const setupTypewriterEffect = () => {
        const typewriterElements = document.querySelectorAll('[data-typewriter]');
        
        typewriterElements.forEach(element => {
            const text = element.textContent;
            const speed = element.getAttribute('data-typewriter-speed') || 50;
            element.textContent = '';
            
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    let i = 0;
                    function typeWriter() {
                        if (i < text.length) {
                            element.textContent += text.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
                        }
                    }
                    typeWriter();
                    observer.unobserve(entries[0].target);
                }
            }, { threshold: 0.5 });
            
            observer.observe(element);
        });
    };
    
    // Curseur personnalisé
    const setupCustomCursor = () => {
        if (window.innerWidth >= 992) { // Seulement pour desktop
            const cursor = document.createElement('div');
            cursor.classList.add('cursor-dot');
            document.body.appendChild(cursor);
            
            document.addEventListener('mousemove', e => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            // Effet de grossissement sur les éléments interactifs
            const interactiveElements = document.querySelectorAll('button, a, .interactive-element');
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => cursor.classList.add('active'));
                element.addEventListener('mouseleave', () => cursor.classList.remove('active'));
            });
        }
    };
    
    // Exécution
    setupParallax();
    setupProjectFilters();
    animateStatistics();
    setupTypewriterEffect();
    setupCustomCursor();
});
