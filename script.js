document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle Menu
            navLinks.classList.toggle('active');
            // Rotate Icon
            hamburger.classList.toggle('rotate');
        });
    }

    // 2. Scroll Animation Logic (Smoother)
    const observerOptions = {
        threshold: 0.15 // Wait until 15% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
