// Add any interactive functionality here
document.querySelector('.cta-button').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#1ea4d0';
});

document.querySelector('.cta-button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#2dc4f3';
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.appear');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});