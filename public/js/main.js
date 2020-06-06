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