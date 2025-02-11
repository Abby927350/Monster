// moviehub.js

// Variables for carousel navigation
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Function to show the current carousel item
function showCarouselItem(index) {
  // Hide all items
  carouselItems.forEach((item) => item.style.display = 'none');
  
  // Show the item at the current index
  carouselItems[index].style.display = 'block';
}

// Event listeners for prev and next buttons
prevBtn.addEventListener('click', () => {
  // Decrease index and loop around if needed
  currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
  showCarouselItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
  // Increase index and loop around if needed
  currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
  showCarouselItem(currentIndex);
});

// Initialize the carousel by showing the first item
showCarouselItem(currentIndex);

// Optional: Auto-scroll carousel every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
  showCarouselItem(currentIndex);
}, 5000);
