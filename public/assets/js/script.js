// Script JavaScript pour le site SGDS

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && mobileNavMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileNavMenu.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = mobileNavMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNavMenu.classList.remove('active');
            });
        });
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !mobileNavMenu.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNavMenu.classList.remove('active');
            }
        });
    }
    
    // Slider functionality
    const slider = {
        currentSlide: 0,
        slides: document.querySelectorAll('.slide'),
        indicators: document.querySelectorAll('.indicator'),
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
        autoPlayInterval: null,
        
        init() {
            // Vérifier si les éléments du slider existent avant d'initialiser
            if (this.slides.length > 0 && this.prevBtn && this.nextBtn) {
                this.bindEvents();
                this.startAutoPlay();
            }
        },
        
        bindEvents() {
            // Navigation buttons
            if (this.prevBtn && this.nextBtn) {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
            }
            
            // Indicators
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            });
            
            // Pause autoplay on hover
            const sliderContainer = document.querySelector('.hero-slider');
            sliderContainer.addEventListener('mouseenter', () => this.pauseAutoPlay());
            sliderContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        },
        
        goToSlide(index) {
            // Remove active class from current slide and indicator
            this.slides[this.currentSlide].classList.remove('active');
            this.indicators[this.currentSlide].classList.remove('active');
            
            // Update current slide
            this.currentSlide = index;
            
            // Add active class to new slide and indicator
            this.slides[this.currentSlide].classList.add('active');
            this.indicators[this.currentSlide].classList.add('active');
        },
        
        nextSlide() {
            const nextIndex = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(nextIndex);
        },
        
        prevSlide() {
            const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.goToSlide(prevIndex);
        },
        
        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 5000); // Change slide every 5 seconds
        },
        
        pauseAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
    };
    
    // Initialize slider
    slider.init();
    
    // Smooth scrolling pour les liens d'ancrage
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation des cartes au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les cartes d'événements
    const eventCards = document.querySelectorAll('.event-card, .seminar-card, .news-card');
    eventCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Gestion du formulaire newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Merci de vous être abonné à notre newsletter !');
                this.reset();
            }
        });
    }

    // Animation du header au scroll
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll vers le bas
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animation des icônes sociales
    const socialIcons = document.querySelectorAll('.social-icons a, .social-links a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Gestion du menu mobile (si nécessaire)
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    // Ajouter le hamburger menu pour mobile
    if (window.innerWidth <= 768) {
        const navbar = document.querySelector('.navbar .container');
        navbar.insertBefore(hamburger, navMenu);
        
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Animation des boutons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-report');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Compteur d'animation pour les statistiques (si ajoutées plus tard)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Lazy loading des images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });

    // Gestion des erreurs de chargement d'images
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://placehold.co/400x300/cccccc/666666?text=Image+non+disponible';
        });
    });

    console.log('Site SGDS chargé avec succès !');
});