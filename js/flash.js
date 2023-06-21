var images = document.querySelectorAll('.slider img');
var currentImage = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}