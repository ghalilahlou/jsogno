// Système d'animations enrichi pour Sogno
document.addEventListener('DOMContentLoaded', function() {
  
  // Animation au scroll avec effets avancés
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-left, .animate-slide-right, .contact-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Délai progressif pour les cartes de contact
          const delay = entry.target.classList.contains('contact-card') ? index * 0.2 : 0;
          
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0, 0)';
            entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            entry.target.classList.add('animated');
          }, delay * 1000);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
      // État initial avec rotation pour plus de dynamisme
      if (el.classList.contains('animate-fade-in')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) rotate(2deg)';
      } else if (el.classList.contains('animate-slide-left')) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-40px) rotate(-2deg)';
      } else if (el.classList.contains('animate-slide-right')) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(40px) rotate(2deg)';
      } else if (el.classList.contains('contact-card')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px) scale(0.95)';
      }
      
      observer.observe(el);
    });
  }
  
  // Effets de hover enrichis
  function setupHoverEffects() {
    // Effets pour les cartes de contact
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px) scale(1.05)';
        card.style.boxShadow = '0 20px 60px rgba(230,184,0,0.3)';
        
        // Animation de l'icône
        const icon = card.querySelector('.contact-icon i');
        if (icon) {
          icon.style.transform = 'scale(1.3) rotate(15deg)';
          icon.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 24px rgba(122,59,46,0.10)';
        
        const icon = card.querySelector('.contact-icon i');
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0deg)';
        }
      });
    });
    
    // Effets pour les cartes de menu
    const menuCards = document.querySelectorAll('.menu-item, .value-card');
    menuCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.03) rotate(1deg)';
        card.style.boxShadow = '0 15px 50px rgba(230,184,0,0.25)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        card.style.boxShadow = '0 4px 24px rgba(122,59,46,0.10)';
      });
    });
    
    // Effets pour les boutons d'action
    const actionButtons = document.querySelectorAll('.action-btn, .btn');
    actionButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-4px) scale(1.05)';
        button.style.boxShadow = '0 12px 30px rgba(122,59,46,0.3)';
        
        // Effet de pulsation sur l'icône
        const icon = button.querySelector('i');
        if (icon) {
          icon.style.animation = 'pulse 0.6s ease-in-out';
        }
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
        button.style.boxShadow = '0 4px 12px rgba(230,184,0,0.3)';
        
        const icon = button.querySelector('i');
        if (icon) {
          icon.style.animation = 'none';
        }
      });
    });
  }
  
  // Menu burger amélioré
  function setupMobileMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const mainNav = document.getElementById('main-nav');
    
    if (burgerBtn && mainNav) {
      burgerBtn.addEventListener('click', () => {
        const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
        burgerBtn.setAttribute('aria-expanded', !isExpanded);
        burgerBtn.classList.toggle('open');
        mainNav.classList.toggle('open');
        
        // Animation des barres du burger
        const bars = burgerBtn.querySelectorAll('.burger-bar');
        bars.forEach((bar, index) => {
          if (!isExpanded) {
            bar.style.transform = index === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                                 index === 1 ? 'opacity: 0' :
                                 'rotate(-45deg) translate(7px, -6px)';
          } else {
            bar.style.transform = 'none';
          }
        });
      });
    }
  }
  
  // Scroll to top avec animation
  function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;
    
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
          scrollBtn.classList.add('visible');
          scrollBtn.style.transform = 'translateY(0) scale(1)';
        } else {
          scrollBtn.classList.remove('visible');
          scrollBtn.style.transform = 'translateY(100px) scale(0.8)';
        }
      }, 10);
    });
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Effet de parallaxe sur le hero
  function setupParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    });
  }
  
  // Animations de texte
  function setupTextAnimations() {
    const titles = document.querySelectorAll('h1, h2, h3');
    titles.forEach(title => {
      title.addEventListener('mouseenter', () => {
        title.style.transform = 'scale(1.02)';
        title.style.transition = 'transform 0.3s ease';
      });
      
      title.addEventListener('mouseleave', () => {
        title.style.transform = 'scale(1)';
      });
    });
  }
  
  // Effet de ripple sur les boutons
  function setupRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .action-btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }
  
  // Animation de compteur pour les statistiques
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 secondes
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  }
  
  // Effet de scroll fluide pour les ancres
  function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // Initialiser toutes les fonctionnalités
  animateOnScroll();
  setupHoverEffects();
  setupMobileMenu();
  setupScrollToTop();
  setupParallax();
  setupTextAnimations();
  setupRippleEffect();
  setupSmoothScroll();
  
  // Animation des compteurs après un délai
  setTimeout(animateCounters, 1000);
  
  console.log('🎨 Animations Sogno enrichies initialisées');
});

// Ajouter les styles CSS pour les animations
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .burger-bar {
    transition: transform 0.3s ease;
  }
  
  #scrollToTop {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .contact-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .contact-icon i {
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;
document.head.appendChild(style); 