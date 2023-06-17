const slidesContainer = document.querySelector('.slides-container');
const slides = Array.from(document.querySelectorAll('.slide'));
const visibleSlides = 4;
const slideWidth = 400;
const slideSpacing = 10;
let currentSlideIndex = 0;
let intervalId;

// Duplicate the slides
const clonedSlides = slides.map((slide) => slide.cloneNode(true));
clonedSlides.forEach((clonedSlide) => slidesContainer.appendChild(clonedSlide));

// Calculate the total width of the slides container
const totalSlidesWidth = (slideWidth + slideSpacing) * (slides.length + clonedSlides.length);

// Set the initial position of the slides container
slidesContainer.style.width = `${totalSlidesWidth}px`;

function showSlides() {
  slidesContainer.style.transform = `translateX(-${currentSlideIndex * (slideWidth + slideSpacing)}px)`;
}

function showNextSlides() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
    slidesContainer.classList.add('transition-disabled');
    setTimeout(() => {
      slidesContainer.classList.remove('transition-disabled');
      showSlides();
    }, 10);
  } else {
    showSlides();
  }
}

function showPreviousSlides() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
    slidesContainer.classList.add('transition-disabled');
    setTimeout(() => {
      slidesContainer.classList.remove('transition-disabled');
      showSlides();
    }, 10);
  } else {
    showSlides();
  }
}

function startSlideShow() {
  intervalId = setInterval(showNextSlides, 3000);
}

function stopSlideShow() {
  clearInterval(intervalId);
}

showSlides();
startSlideShow();
