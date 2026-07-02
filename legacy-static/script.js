// ============================================
// Mobile Menu Toggle
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Smooth Scrolling
// ============================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active Navigation Link on Scroll
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop) {
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

// ============================================
// Navbar Background on Scroll
// ============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// Scroll Animations (Fade-in Effect)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(item);
    });
    
    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(category);
    });
});

// ============================================
// Video Loading Handler for Project Cards
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const projectVideos = document.querySelectorAll('.project-video');
    
    projectVideos.forEach(video => {
        // Check if video has a valid source
        const sources = video.querySelectorAll('source');
        let hasValidSource = false;
        
        sources.forEach(source => {
            if (source.src) {
                hasValidSource = true;
            }
        });
        
        if (hasValidSource) {
            // Hide placeholder when video loads successfully
            video.addEventListener('loadeddata', () => {
                const placeholder = video.parentElement.querySelector('.placeholder-image');
                if (placeholder) {
                    placeholder.style.display = 'none';
                }
                video.style.display = 'block';
                // Ensure video plays
                video.play().catch(err => {
                    console.log('Autoplay prevented:', err);
                });
            });
            
            // Show placeholder if video fails to load
            video.addEventListener('error', () => {
                const placeholder = video.parentElement.querySelector('.placeholder-image');
                if (placeholder) {
                    placeholder.style.display = 'flex';
                }
                video.style.display = 'none';
            });
            
            // Load the video
            video.load();
            
            // Initially hide video until it loads
            video.style.display = 'none';
        } else {
            // No valid source, show placeholder
            const placeholder = video.parentElement.querySelector('.placeholder-image');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
            video.style.display = 'none';
        }
    });
});

// ============================================
// Initialize on Page Load
// ============================================

window.addEventListener('load', () => {
    // Set initial active link based on scroll position
    const sections = document.querySelectorAll('.section');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

