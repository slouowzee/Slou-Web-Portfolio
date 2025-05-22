/**
 * Languages - Gestion du changement de langue
 * Ce script gère le changement de langue du site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dictionnaire de traduction (on peut l'étendre facilement)
    const translations = {
        'fr': {
            // Navigation
            'nav_about': 'À propos',
            'nav_techs': 'Technologies',
            'nav_services': 'Services',
            'nav_projects': 'Projets',
            'nav_contact': 'Contact',
            
            // Hero section
            'hero_greeting': 'Bonjour, je suis',
            'hero_job_1': 'Développeur web front-end',
            'hero_job_2': 'Et back-end aussi',
            'hero_job_3': 'Designer web à temps perdu',
            'hero_job_4': 'Fan de Terminal',
            'hero_job_5': 'Passionné de UI/UX',
            'hero_job_6': 'Créateur Web',
            'hero_job_7': 'Chanteur de Métal',
            'hero_quote': 'Pour moi, imaginer, concevoir, créer, à partir de zéro est l\'une des choses les plus satisfaisantes dans le métier de développeur web.',
            
            // About section
            'about_title': 'Et si on parlais un peu de moi ?',
            'about_more': '$ cat more_details.txt',
            'about_less': '$ cat less_details.txt',
            'about_text_heading': 'Mon parcours',
            'about_stats_heading': 'En quelques chiffres',
            
            // Tech section
            'tech_title': 'EH eh, regarde tout ça ! >-<',
            'tech_subtitle': 'Vous avez vu ? Je parle beaucoup de langages >_<\'<br>Et en plus je suis polyvalant ^-^',
            'tech_frontend': 'Front-end',
            'tech_backend': 'Back-end',
            'tech_cms': 'CMS, Frameworks & Bibliothèques',
            'tech_db': 'Base de données',
            'tech_tools': 'Outils de développement',
            'tech_systems': 'Systèmes & Environnements',
            
            // Services section
            'services_title': 'Je peux quand même te proposer quelques choses. :>',
            'service_1_title': 'Site web static, sécurisé, responsive et agréable.',
            'service_1_text': 'Afin de satisfaire ton envie d\'exposer ce qui te passionne, je peux te proposer un site web entièrement fonctionnel, optimisé et bien référencé pour le SEO, pour que tu puisse toucher le plus grand nombre de personnes. ;)',
            'service_2_title': '"There is more to come..."',
            'service_2_text': 'Ça, c\'est ce que je dirais si j\'étais Anglais. J\'étudie toujours, donc mes services sont limités. Cependant, si vous avez des requêtes spéciales, je serai heureux d\'en apprendre d\'avantage ! Il faudra juste scroller un peu et m\'envoyer un mail :)',
            
            // Projects section
            'projects_title': 'Faisons un petit tour dans ma galerie de projets !',
            'project_1_title': 'Le Monde de Slou',
            'project_1_text': 'Le Monde de Slou est un petit site static que j\'ai dû développer en projet professionnel à mon lycée pour le faire noté.',
            'project_2_title': 'Portfolio',
            'project_2_text': 'Ça, bah c\'est mon portfolio, vous êtes déjà dessus x). Si vous cliquez sur le bouton, vous ne serez pas du tout renvoyé sur une page troll.',
            'project_coming_title': '"There is more to come... Encore..."',
            'project_coming_text': 'Comme pour les services, je suis en train de travailler sur de nouveaux projets, mais je ne peux pas tout faire en même temps. Si vous avez des idées, n\'hésitez pas à me contacter !',
            
            // Contact section
            'contact_title': 'Une envie de papotter ?',
            'contact_text': 'Envie de me contacter pour parler de votre projet, de vos idées, ou juste pour discuter ?<br>N\'hésitez pas à m\'envoyer un mail, je vous répondrai dès que possible ! :D<br>Mais vous pouvez tout de même communiquer avec moi via mes réseaux sociaux ;) !',
            'form_lastname': 'Nom:',
            'form_firstname': 'Prénom:',
            'form_email': 'Email:',
            'form_subject': 'Objet:',
            'form_message': 'Message:',
            'form_send': 'Envoyer',
            
            // Footer
            'footer_goodbye': 'On se sépare déjà ;-;',
            'footer_goodbye_text': 'À notre grand regret, tu es déjà arrivé en bas de la page, juste en dessous t\'a le footer, et y\'a pleins d\'infos intéréssante dessus, mais si tu lis ça c\'est que tu veux me quitter ou bien que tu veux faire le tour de la page. Mais n\'empâche, je te remercie du temps que tu m\'a accordé aujourd\'hui, je t\'en suis reconnaissant ! J\'espère te revoir bientôt ^-^',
            'footer_others': 'Une envie de se balader ?',
            'footer_about_heading': 'À propos',
            'footer_about_text': 'Portfolio de Gaël Pilet, développeur front-end passionné par la création d\'expériences web modernes et accessibles.',
            'footer_nav_heading': 'Navigation',
            'footer_nav_home': 'Accueil',
            'footer_nav_about': 'À propos',
            'footer_nav_skills': 'Compétences',
            'footer_nav_services': 'Services',
            'footer_nav_projects': 'Projets',
            'footer_nav_contact': 'Contact',
            'footer_support_heading': 'Me soutenir',
            'footer_support_paypal': 'PayPal',
            'footer_support_kofi': 'Ko-fi',
            'footer_copyright_end': 'Designé avec',
            'footer_copyright_by': 'par moi-même ">-<"',
            'footer_rights': 'Tous droits réservés',
            'footer_designed': 'Conçu avec',
            'project_view': 'Voir le site',
            'stat_languages': 'Langages de programmation',
            'stat_education': 'SIO en cours',
            'stat_singing': 'Années de chant',
            'stat_experience': 'Ans d\'expérience',
            'stat_projects': 'Projets réalisés',
            'stat_servers': 'Serveurs administrés',
            'stat_coffee': 'Tasses de café',
            'stat_guitar': 'Années de guitare',
            'contact_submit': 'Envoyer'
        },
        'en': {
            // Navigation
            'nav_about': 'About',
            'nav_techs': 'Technologies',
            'nav_services': 'Services',
            'nav_projects': 'Projects',
            'nav_contact': 'Contact',
            
            // About section headers
            'about_text_heading': 'My Journey',
            'about_stats_heading': 'By the Numbers',
            
            // Hero section
            'hero_greeting': 'Hi, I am',
            'hero_job_1': 'Front-end Web Developer',
            'hero_job_2': 'And Back-end too',
            'hero_job_3': 'Part-time Web Designer',
            'hero_job_4': 'Terminal Fan',
            'hero_job_5': 'UI/UX Enthusiast',
            'hero_job_6': 'Web Creator',
            'hero_job_7': 'Metal Singer',
            'hero_quote': 'For me, imagining, designing, creating from scratch is one of the most satisfying things in the web developer profession.',
            
            // About section
            'about_title': 'Let\'s talk a bit about me?',
            'about_more': '$ cat more_details.txt',
            'about_less': '$ cat less_details.txt',
            
            // About paragraphs (added for English version)
            'about_p1': 'Hey, how are you?<br>Actually, I can\'t hear you ^-^\'...<br>As you saw in the page title, my name is Gaël, I\'m a web developer doing all sorts of things, I make good stuff and cool things, and I\'m proud of it, which is nice ;)<br>More seriously, I\'m studying for a BTS SIO (IT Services for Organizations), where I\'m learning web development, along with many other subjects: static and dynamic web development (especially dynamic), application development with OOP and Windows Forms, understanding data, and much more.<br>Basically, I\'ve already set up a secure local Nextcloud server, a nice static website, a WordPress site, various servers, used protocols like SSH, done versioning, worked with lots of languages... and much more, it would take too long to list.',
            'about_p2': 'Besides school, I also have a background in development, not necessarily web, but I have experience and good logic, which helps me quite a bit, to be honest.<br>I did Python in high school and self-taught for about a year and a half, up to OOP and Tkinter... :notveryhappyface:<br>I also got into C, especially during a "piscine" at 42. It helped me both with learning autonomously and with socializing and lots of other things. It was really a good experience... 9/10, I recommend, but be in the right coalition if you want to get in. Being one of the best means nothing if you\'re not supported.',
            'about_more_p1': 'Well, now you know who I am in the dev world. But who am I really? Well... Batman! Haven\'t you noticed? Wait, who am I talking to here? Me or you? Anyway, doesn\'t matter.<br>So, here\'s my top 3 best things in my life:',
            'about_interest_1': 'Singing. Yeah, I\'m a singer! I\'d like to make it my profession, but we\'ll see later. I\'ve been singing for 7 years now, and not in just any genre: ✨Metal✨. A real passion for me for a long time, especially with Avatar (what? No, not the movie or the animated show, "Avatar", the real ones!). I sing in both French and English, I listen to it every day, I make covers, I write lyrics, etc.',
            'about_interest_2': 'Sports. It might not seem like it, but I actually like it. It helps me shape my body to reach what I want, anyway...',
            'about_interest_3': 'Activities: video games, even if I have less and less time... tough life. I also play guitar, I\'m trying to improve. I probably won\'t be a lead guitarist, but I like having a decent level. And eating, like everyone, I suppose (cooking falls under this too). And many other things that make life cool.',
            'about_more_p2': 'Well, I think I\'ve kept you long enough. And if you\'re reading this, it\'s because you wanted to know more, since you clicked on the red button, it\'s blue? ah. Thanks for reading anyway! I know my biography is better than a good Stephen King thriller, but no need to remind me, heh.<br>Kisses ❤️',
            
            // Tech section
            'tech_title': 'HEY hey, look at all this! >-<',
            'tech_subtitle': 'You see? I speak many languages >_<\'<br>And I\'m versatile too ^-^',
            'tech_frontend': 'Front-end',
            'tech_backend': 'Back-end',
            'tech_cms': 'CMS, Frameworks & Libraries',
            'tech_db': 'Databases',
            'tech_tools': 'Development Tools',
            'tech_systems': 'Systems & Environments',
            
            // Services section
            'services_title': 'I can still offer you some things. :>',
            'service_1_title': 'Static, secure, responsive and pleasant website.',
            'service_1_text': 'To satisfy your desire to showcase what you\'re passionate about, I can offer you a fully functional website, optimized and well-referenced for SEO, so you can reach as many people as possible. ;)',
            'service_2_title': '"There is more to come..."',
            'service_2_text': 'I\'m still studying, so my services are limited. However, if you have special requests, I\'ll be happy to learn more! Just scroll down a bit and send me an email :)',
            
            // Projects section
            'projects_title': 'Let\'s take a tour of my project gallery!',
            'project_1_title': 'Slou\'s World',
            'project_1_text': 'Slou\'s World is a small static site that I had to develop as a professional project at my high school to get graded.',
            'project_2_title': 'Portfolio',
            'project_2_text': 'Well, this is my portfolio, you\'re already on it x). If you click the button, you\'ll definitely not be sent to a troll page.',
            'project_coming_title': '"There is more to come... Again..."',
            'project_coming_text': 'As with the services, I\'m working on new projects, but I can\'t do everything at once. If you have ideas, don\'t hesitate to contact me!',
            
            // Contact section
            'contact_title': 'Want to chat?',
            'contact_text': 'Want to contact me to talk about your project, your ideas, or just to chat?<br>Don\'t hesitate to send me an email, I\'ll reply as soon as possible! :D<br>But you can also communicate with me via my social networks ;)!',
            'form_lastname': 'Last name:',
            'form_firstname': 'First name:',
            'form_email': 'Email:',
            'form_subject': 'Subject:',
            'form_message': 'Message:',
            'form_send': 'Send',
            
            // Footer
            'footer_goodbye': 'We\'re already parting ways ;-;',
            'footer_goodbye_text': 'To our regret, you\'ve already reached the bottom of the page, just below you have the footer, and there\'s lots of interesting info on it, but if you\'re reading this it\'s because you want to leave or you want to tour the page. But anyway, I thank you for the time you\'ve given me today, I\'m grateful! Hope to see you again soon ^-^',
            'footer_others': 'Want to look around?',
            'footer_about_heading': 'About',
            'footer_about_text': 'Portfolio of Gaël Pilet, front-end developer passionate about creating modern and accessible web experiences.',
            'footer_nav_heading': 'Navigation',
            'footer_nav_home': 'Home',
            'footer_nav_about': 'About',
            'footer_nav_skills': 'Skills',
            'footer_nav_services': 'Services',
            'footer_nav_projects': 'Projects',
            'footer_nav_contact': 'Contact',
            'footer_support_heading': 'Support me',
            'footer_support_paypal': 'PayPal',
            'footer_support_kofi': 'Ko-fi',
            'footer_copyright_end': 'Designed with',
            'footer_copyright_by': 'by myself ">-<"',
            'footer_rights': 'All rights reserved',
            'footer_designed': 'Designed with',
            'project_view': 'View site',
            'stat_languages': 'Programming languages',
            'stat_education': 'SIO in progress',
            'stat_singing': 'Years of singing',
            'stat_experience': 'Years of experience',
            'stat_projects': 'Projects completed',
            'stat_servers': 'Servers administered',
            'stat_coffee': 'Cups of coffee',
            'stat_guitar': 'Years of guitar',
            'contact_submit': 'Send'
        }
    };
    
    // Langue par défaut
    let currentLang = localStorage.getItem('lang') || 'fr';
    
    // Fonction pour traduire la page
    function translatePage(lang) {
        if (!translations[lang]) return;
        
        // Stocker la langue actuelle
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Récupérer tous les éléments avec l'attribut data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Vérifier si l'élément a des enfants HTML
                if (translations[lang][key].includes('<br>') || translations[lang][key].includes('<span>')) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        
        // Mettre à jour les attributs placeholder
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
        
        // Mettre à jour les jobs dans l'animation typing
        if (window.typingTexts) {
            window.typingTexts = [
                translations[lang].hero_job_1,
                translations[lang].hero_job_2,
                translations[lang].hero_job_3,
                translations[lang].hero_job_4,
                translations[lang].hero_job_5,
                translations[lang].hero_job_6,
                translations[lang].hero_job_7,
            ];
        }
        
        // Mettre à jour le bouton de changement de langue
        updateLanguageButton(lang);
    }
    
    // Mettre à jour le bouton de langue
    function updateLanguageButton(lang) {
        const langButton = document.querySelector('.language-switcher');
        if (langButton) {
            const langIcon = langButton.querySelector('i');
            const langText = document.createElement('span');
            
            // Mettre à jour le texte du bouton
            langText.textContent = lang.toUpperCase();
            
            // Styliser le texte
            langText.style.fontSize = '0.8rem';
            langText.style.fontWeight = 'bold';
            langText.style.marginLeft = '4px';
            
            // Si un texte existe déjà, le remplacer
            const existingText = langButton.querySelector('span');
            if (existingText) {
                existingText.textContent = lang.toUpperCase();
            } else if (langIcon) {
                // Sinon l'ajouter
                langButton.appendChild(langText);
            }
        }
    }
    
    // Initialiser la traduction
    translatePage(currentLang);
    
    // Gérer le clic sur le bouton de changement de langue
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            // Alterner entre fr et en
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            translatePage(newLang);
            
            // Animation de transition pour indiquer le changement
            langSwitcher.classList.add('lang-switch-animation');
            setTimeout(() => {
                langSwitcher.classList.remove('lang-switch-animation');
            }, 500);
        });
    }
    
    // Exposer les fonctions pour être utilisées ailleurs
    window.translatePage = translatePage;
    window.currentLang = currentLang;
});
