// Navbar for scroll detection
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = '-100px'; // Adjust this value based on your nav height
  } else {
    // Scroll up
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Swiper slide
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    941: {
      slidesPerView: 1.4,
      spaceBetween: 30,
    },
    970: {
      slidesPerView: 1.4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1.6,
      spaceBetween: 30,
    },
    1349: {
      slidesPerView: 2.4,
      spaceBetween: 130,
    },
    1440: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
  },
});

// AOS Animation
AOS.init();