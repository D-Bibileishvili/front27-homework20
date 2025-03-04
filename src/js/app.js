// clock
function realTimeClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM";

  //   hours = hours % 12 || 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = `${hours}:${minutes}:${seconds} ${amPm} `;
  document.getElementById("clock").textContent = time;
}

setInterval(realTimeClock, 1000);

// slider
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
