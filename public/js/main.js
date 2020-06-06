// main-header__collapsible-sec

(function () {
  const mainHeaderCollapsibleSec = document.querySelector(
    ".main-header__collapsible-sec"
  );
  window.addEventListener("scroll", handleEvent);
  function handleEvent() {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      if (this.oldScroll > this.scrollY) {
        mainHeaderCollapsibleSec.classList.remove("hidden");
      } else {
        mainHeaderCollapsibleSec.classList.add("hidden");
      }
    } else {
      mainHeaderCollapsibleSec.classList.remove("hidden");
    }
    this.oldScroll = this.scrollY;
  }
})();

const backdrop = document.querySelector(".backdrop");
const sideDrawer = document.querySelector(".mobile-nav");
const menuToggle = document.querySelector("#side-menu-toggle");

function backdropClickHandler() {
  backdrop.style.display = "none";
  sideDrawer.classList.remove("open");
}

function menuToggleClickHandler() {
  backdrop.style.display = "block";
  sideDrawer.classList.add("open");
}

backdrop && backdrop.addEventListener("click", backdropClickHandler);
menuToggle && menuToggle.addEventListener("click", menuToggleClickHandler);

// swiper

var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
