/* Mobile Menu Toggle */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.className = 'ph ph-x';
        } else {
            icon.className = 'ph ph-list';
        }
    });
}

// Close mobile menu when clicking on links
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'ph ph-list';
    });
});

/* Sticky Navigation */
const nav = document.getElementById('main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

/* Globe Canvas Animation */
const globeCanvas = document.getElementById('globe-canvas');
const locationMarkers = document.getElementById('location-markers');

const locations = [
    { name: "San Francisco", x: 20, y: 35, delay: 0 },
    { name: "New York", x: 30, y: 32, delay: 0.2 },
    { name: "London", x: 49, y: 28, delay: 0.4 },
    { name: "Frankfurt", x: 52, y: 27, delay: 0.6 },
    { name: "Singapore", x: 75, y: 55, delay: 0.8 },
    { name: "Tokyo", x: 80, y: 35, delay: 1.0 },
    { name: "Sydney", x: 82, y: 75, delay: 1.2 },
    { name: "São Paulo", x: 35, y: 72, delay: 1.4 },
    { name: "Mumbai", x: 68, y: 52, delay: 1.6 },
    { name: "Toronto", x: 28, y: 30, delay: 1.8 },
];

function initGlobe() {
    if (!globeCanvas) return;
    
    const ctx = globeCanvas.getContext('2d');
    if (!ctx) return;
    
    function resizeCanvas() {
        const rect = globeCanvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        globeCanvas.width = rect.width * dpr;
        globeCanvas.height = rect.height * dpr;
        
        ctx.scale(dpr, dpr);
        
        drawMap(rect.width, rect.height);
    }
    
    function drawMap(width, height) {
        ctx.clearRect(0, 0, width, height);
        
        ctx.strokeStyle = 'rgba(120, 120, 140, 0.2)';
        ctx.lineWidth = 1;
        
        // Horizontal lines
        for (let i = 0; i < 8; i++) {
            const y = (i / 7) * height;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        
        // Vertical lines
        for (let i = 0; i < 12; i++) {
            const x = (i / 11) * width;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
    }
    
    // Create location markers
    locations.forEach(location => {
        const marker = document.createElement('div');
        marker.className = 'location-marker';
        marker.style.left = `${location.x}%`;
        marker.style.top = `${location.y}%`;
        marker.style.animationDelay = `${location.delay}s`;
        
        const dot = document.createElement('div');
        dot.className = 'marker-dot';
        
        const ping = document.createElement('div');
        ping.className = 'marker-ping';
        ping.style.animationDelay = `${location.delay}s`;
        
        const label = document.createElement('div');
        label.className = 'marker-label';
        label.textContent = location.name;
        
        marker.appendChild(dot);
        marker.appendChild(ping);
        marker.appendChild(label);
        
        locationMarkers.appendChild(marker);
    });
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

// Initialize globe on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobe);
} else {
    initGlobe();
}

/* Smooth Scroll for Navigation Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* Intersection Observer for Scroll Animations */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .feature-card, .testimonial-card, .pricing-card').forEach(el => {
    observer.observe(el);
});

/* Add active class to navigation links based on scroll position */
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - nav.offsetHeight - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

/* Pricing Card Hover Effect */
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
