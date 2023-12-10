let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].style.display = 'block';
}

setInterval(showSlide, 3000); // Cambia cada 3 segundos