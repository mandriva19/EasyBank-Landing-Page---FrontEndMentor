//get navbar-clicker btn
const navbarClick = document.querySelector(".navbar-click");
//get navbar-overlay
const navbarOverlay = document.querySelector(".navbar-overlay");
//get navbar items menu
const navbarItems = document.querySelector(".navbar-items");
//get body element
const body = document.querySelector("body");

// function toggles between clicked/not clicked for navbar
const toggleNavClick = () => {
  navbarClick.classList.toggle("is-clicked");
  navbarItems.classList.toggle("is-hidden");
};

//hide navbar-items when user clicks outside the navbar-items
navbarOverlay.addEventListener("click", (event) => {
  if (event.target === navbarOverlay) {
    navbarOverlay.classList.add("is-hidden");
    navbarItems.classList.add("is-hidden");
    body.style.overflow = "auto";
    navbarClick.classList.remove("is-clicked");
  }
});

//check if navbar items is open and disable scroll
const scrollDisable = () => {
  if (navbarItems.classList.contains("is-hidden")) {
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
  }
};

//this is general function that shows/hide overlay/nav-items and adds classes for animations
const navbarClickFunction = () => {
  if (navbarOverlay.classList.contains("is-hidden")) {
    navbarOverlay.classList.remove("is-hidden");
    navbarOverlay.classList.add("animate__zoomIn");
  } else {
    navbarOverlay.classList.add("is-hidden");
  }
};

//event-listener for navbar-click. it runs functions that are declared above
navbarClick.addEventListener("click", function () {
  toggleNavClick();
  navbarClickFunction();
  scrollDisable();
});
