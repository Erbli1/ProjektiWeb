const slides = Array.from(document.querySelectorAll('.slideshow-wrapper img'));
const visibleSlides = 4;
let currentSlideIndex = 0;

function showSlides() {
  const endIndex = currentSlideIndex + visibleSlides;

  for (let i = 0; i < slides.length; i++) {
    if (i >= currentSlideIndex && i < endIndex) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
  
  // Apply transition effect
  slides.forEach((slide, index) => {
    slide.style.transition = index >= currentSlideIndex && index < endIndex ? 'opacity 0.5s ease-in-out' : '';
    slide.style.opacity = index >= currentSlideIndex && index < endIndex ? '1' : '0';
  });
}

function showNextSlides() {
  const lastSlideIndex = slides.length - visibleSlides;

  if (currentSlideIndex >= lastSlideIndex) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }

  showSlides();
}

function showPreviousSlides() {
  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - visibleSlides;
  } else {
    currentSlideIndex--;
  }

  showSlides();
}

document.getElementById('nextBtn').addEventListener('click', showNextSlides);
document.getElementById('prevBtn').addEventListener('click', showPreviousSlides);

showSlides();
