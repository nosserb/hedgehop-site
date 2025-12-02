let currentIndex = 0

function showSlide(index) {
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")

  if (index >= slides.length) {
    currentIndex = 0
  } else if (index < 0) {
    currentIndex = slides.length - 1
  } else {
    currentIndex = index
  }

  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  slides[currentIndex].classList.add("active")
  dots[currentIndex].classList.add("active")
}

function moveSlide(direction) {
  showSlide(currentIndex + direction)
}

function currentSlide(index) {
  showSlide(index)
}

// Auto-play optionnel
setInterval(() => {
  moveSlide(1)
}, 5000)
