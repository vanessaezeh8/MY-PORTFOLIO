// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.timeline-item, .project-card, .highlight-card, .leadership-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment the line below to enable typing animation
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Skill tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Contact items hover effect
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate elements on page load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .nav-link.active {
        color: #6366f1;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function for smooth animations
function animateOnScroll(element, animation) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animation);
            }
        });
    });
    
    observer.observe(element);
}

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill tags
    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('fade-in-up');
    });
    
    // Animate project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in-up');
    });
    
    // Animate highlight cards
    document.querySelectorAll('.highlight-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add('fade-in-up');
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add click-to-copy functionality for contact info
    document.querySelectorAll('.contact-item a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.startsWith('mailto:') || this.href.startsWith('tel:')) {
                return; // Let default behavior handle mailto and tel links
            }
            
            // For other links, add a subtle animation
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Add hover effects for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add a subtle cursor trail effect (optional)
let mouseX = 0;
let mouseY = 0;
let cursorTrail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create cursor trail elements
for (let i = 0; i < 5; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: ${0.3 - i * 0.05};
        transition: all 0.1s ease;
    `;
    document.body.appendChild(trail);
    cursorTrail.push(trail);
}

// Animate cursor trail
function animateCursorTrail() {
    cursorTrail.forEach((trail, index) => {
        const delay = index * 2;
        setTimeout(() => {
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
        }, delay);
    });
    requestAnimationFrame(animateCursorTrail);
}

// Start cursor trail animation (uncomment to enable)
// animateCursorTrail(); 