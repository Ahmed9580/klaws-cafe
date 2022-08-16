const menuBtn = document.getElementById("menu-btn");
const header = document.querySelector(".header");
const home = document.querySelector(".home");
const navbar = document.querySelector(".header .links");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > home.offsetHeight + 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

//home slider
var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//about slider
var swiper = new Swiper(".menu-slider", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 5,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

/*specials*/
const tabs = document.querySelectorAll("#tabs-links a");
const content = document.querySelectorAll("#tabs-content > section");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");

    content.forEach((sec) => {
      sec.style.display = "none";

      if (this.id === sec.getAttribute("data-show")) {
        sec.style.display = "grid";
      }
    });
  });
});

function removeActive() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
