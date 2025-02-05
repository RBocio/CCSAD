let slideContainer = document.querySelector('.slides');
let autoSlide;

// Move to the next slide
function nextSlide() {
    let items = document.querySelectorAll('.items');
    slideContainer.appendChild(items[0]); // Move the first item to the end
}

// Move to the previous slide
function previousSlide() {
    let items = document.querySelectorAll('.items');
    slideContainer.insertBefore(items[items.length - 1], items[0]); // Move the last item to the beginning
}

// Start automatic sliding
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000); // Change slides every 3 seconds
}

// Stop automatic sliding
function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Keyboard navigation (left/right arrows)
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight") {
        stopAutoSlide(); // Stop auto-slide when user manually navigates
        nextSlide();
        startAutoSlide(); // Restart auto-slide after manual navigation
    } else if (event.key === "ArrowLeft") {
        stopAutoSlide();
        previousSlide();
        startAutoSlide();
    }
});

// Touch gesture (swipe left/right)
let touchStartX = 0;
let touchEndX = 0;

slideContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

slideContainer.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    if (touchStartX > touchEndX + 50) { // Swipe left
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    } else if (touchStartX < touchEndX - 50) { // Swipe right
        stopAutoSlide();
        previousSlide();
        startAutoSlide();
    }
});

// Start the slider on page load
startAutoSlide();
