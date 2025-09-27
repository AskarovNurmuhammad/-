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

// Tab switching functionality
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    if (this.textContent === "Продавцам") {
      console.log("Show content for sellers");
      // Here you can add logic to change content for sellers
    } else {
      console.log("Show content for buyers");
      // Here you can add logic to change content for buyers
    }
  });
});

// Animate steps on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Initialize animation
document.querySelectorAll(".step").forEach((step, index) => {
  step.style.opacity = "0";
  step.style.transform = "translateY(30px)";
  step.style.transition = `all 0.6s ease ${index * 0.1}s`;
  observer.observe(step);
});

// Add smooth scroll animation to path drawing on page load
window.addEventListener("load", () => {
  const pathElement = document.querySelector(".path-line");
  if (pathElement) {
    pathElement.style.animation = "drawPath 3s ease-in-out";
  }
});

// Phone click handler
document.querySelectorAll('a[href^="tel:"]').forEach(function (phoneLink) {
  phoneLink.addEventListener("click", function (e) {
    // Analytics tracking can be added here
    console.log("Phone number clicked:", this.href);
  });
});

// Email click handler
document.querySelectorAll('a[href^="mailto:"]').forEach(function (emailLink) {
  emailLink.addEventListener("click", function (e) {
    // Analytics tracking can be added here
    console.log("Email clicked:", this.href);
  });
});

// Social media click tracking
document.querySelectorAll(".social-btn").forEach(function (socialBtn) {
  socialBtn.addEventListener("click", function (e) {
    console.log("Social button clicked:", this.href || this.title);
  });
});

// Smooth scroll for footer navigation
document.querySelectorAll(".footer-nav a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Form submission handler
document
  .querySelector(".consultation-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = this.querySelector('input[placeholder="Имя"]').value;
    const phone = this.querySelector('input[placeholder="Телефон"]').value;
    const email = this.querySelector('input[placeholder="E-mail"]').value;

    // Here you can add your form submission logic
    console.log("Form submitted:", { name, phone, email });

    // Show success message (you can customize this)
    alert("Спасибо! Мы перезвоним вам в течение 30 минут.");

    // Reset form
    this.reset();
  });

// Phone number formatting
document
  .querySelector('input[placeholder="Телефон"]')
  .addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0) {
      if (value[0] === "8") value = "7" + value.slice(1);
      if (value[0] === "7") {
        value = "+7" + value.slice(1);
      }
    }
    e.target.value = value;
  });

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}

function closeMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
    closeMenu();
  }
});
