function sliderFn() {
  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("show-slide");
      } else {
        slide.classList.remove("show-slide");
      }
    });
  }

  function goToNextSlide() {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    renderSlides();
  }

  function startSlide() {
    slideInterval = setInterval(goToNextSlide, 3000);
  }

  function stopSlide() {
    clearInterval(slideInterval);
  }

  document
    .querySelector(".slider-wrapper")
    .addEventListener("mouseenter", stopSlide);

  document
    .querySelector(".slider-wrapper")
    .addEventListener("mouseleave", startSlide);

  startSlide();
}

sliderFn();
