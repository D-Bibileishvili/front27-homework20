function sliderFn() {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
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

  // renderSlides();

  function goToNextSlide() {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    renderSlides();
  }

  function goToPreSlide() {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide--;
    }
    renderSlides();
  }

  next.addEventListener("click", goToNextSlide);
  prev.addEventListener("click", goToPreSlide);

  // setInterval(goToNextSlide, 5000);

  document.addEventListener("keyup", (e) => {
    console.log("key up", e);
    if (e.code === "ArrowRight") {
      goToNextSlide();
    }
    if (e.code === "ArrowLeft") {
      goToPreSlide();
    }
  });
  // document.addEventListener("keydown", (e) => {
  // 	console.log("key down", e);
  // });
  // document.addEventListener("keypress", (e) => {
  // 	console.log("key press", e);
  // });
}

sliderFn();
