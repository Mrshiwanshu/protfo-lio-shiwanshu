document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // --- Custom Cursor ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline follow
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: 'forwards' });
    });

    // --- Scroll Progress Bar ---
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    });

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });

    // --- Section Reveal Animation ---
    const revealSections = document.querySelectorAll('.section-reveal');
    const revealHero = document.querySelectorAll('.hero .reveal');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's the about section, trigger skill bars
                if (entry.target.id === 'about') {
                    animateSkillBars();
                }
            }
        });
    }, { threshold: 0.15 });

    revealSections.forEach(section => {
        revealOnScroll.observe(section);
    });

    // Hero content stagger entry
    revealHero.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 200 + (index * 150));
    });

    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress-line span');
        skillBars.forEach(bar => {
            const progress = bar.parentElement.getAttribute('data-progress');
            bar.style.width = progress;
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        mobileMenuBtn.classList.toggle('active');

        // Disable body scroll when menu is open
        if (navLinks.classList.contains('mobile-active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- Form Submission (Local-File Friendly "No Redirect") ---
    const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending...';
        btn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.style.color = '#10b981';
                formStatus.innerText = 'Thank you! Your message has been sent.';
                contactForm.reset();
            } else {
                formStatus.style.color = '#ef4444';
                formStatus.innerText = 'Oops! Something went wrong. Please try again.';
            }
        } catch (error) {
            formStatus.style.color = '#ef4444';
            formStatus.innerText = 'Network error. Please try again later.';
        }

        btn.innerHTML = originalText;
        btn.disabled = false;

        setTimeout(() => { if (formStatus) formStatus.innerText = ''; }, 5000);
    });
}
});
