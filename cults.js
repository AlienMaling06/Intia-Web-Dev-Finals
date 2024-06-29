const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nav = document.querySelector('.nav');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let currentSlide = 0;

// add event listeners to navigation buttons
prev.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  updateSlider();
});

next.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
});

// add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

// update slider function
function updateSlider() {
  // remove active class from all slides and dots
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  // add active class to current slide and dot
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  // update slide positions
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.transform = `translateX(0)`;
    } else {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    }
  });
}