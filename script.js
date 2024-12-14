let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Show next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Show previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);

// Auto change slide every 5 seconds
setInterval(nextSlide, 5000);

    const hamburger = document.querySelector('.Hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });