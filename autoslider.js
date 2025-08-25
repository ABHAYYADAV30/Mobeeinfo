// Auto slider logic
const autoSlider = document.getElementById('autoSlider');
let currentIndex = 0;
const images = autoSlider.getElementsByTagName('img');
const totalImages = images.length;

function showImage(index) {
  for (let i = 0; i < totalImages; i++) {
    images[i].style.display = i === index ? 'block' : 'none';
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 2500); // Change image every 2.5 seconds