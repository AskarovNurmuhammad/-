// Header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1, // Начинаем с "Ипотека" (индекс 1)
  loop: false, // Отключаем loop для правильной работы initialSlide
  slideToClickedSlide: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Обработчик смены слайда
  on: {
    slideChange: function () {
      // Показываем кнопку консультации только на активном слайде "Ипотека"
      const consultationBtns = document.querySelectorAll(".consultation-btn");
      consultationBtns.forEach((btn) => (btn.style.display = "none"));

      if (this.activeIndex === 1) {
        // Индекс слайда "Ипотека"
        const activeBtn =
          this.slides[this.activeIndex].querySelector(".consultation-btn");
        if (activeBtn) {
          activeBtn.style.display = "block";
        }
      }
    },

    init: function () {
      // Показываем кнопку при инициализации
      if (this.activeIndex === 1) {
        const activeBtn =
          this.slides[this.activeIndex].querySelector(".consultation-btn");
        if (activeBtn) {
          activeBtn.style.display = "block";
        }
      }
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Обработчик клика на кнопку консультации
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("consultation-btn")) {
    alert("Заявка на консультацию отправлена!");
  }
});
