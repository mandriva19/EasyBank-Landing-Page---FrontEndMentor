// Get elements
const navbarClick = document.querySelector(".navbar-click");
const navbarOverlay = document.querySelector(".navbar-overlay");
const navbarItems = document.querySelector(".navbar-items");
const body = document.querySelector("body");

// Toggle function for navbar click
const toggleNavClick = () => {
  navbarClick.classList.toggle("is-clicked");
  navbarItems.classList.toggle("is-hidden");
  navbarItems.classList.add("animate__zoomIn");
};

// Event listener for hiding navbar items when clicked outside
navbarOverlay.addEventListener("click", (event) => {
  if (event.target === navbarOverlay) {
    navbarOverlay.classList.add("is-hidden");
    navbarItems.classList.add("is-hidden");
    navbarClick.classList.remove("is-clicked");
  }
});

// Function for showing/hiding overlay
const navbarClickFunction = () => {
  if (navbarOverlay.classList.contains("is-hidden")) {
    navbarOverlay.classList.remove("is-hidden");
    // navbarOverlay.classList.add("animate__zoomIn");
  } else {
    navbarOverlay.classList.add("is-hidden");
  }
};

// Close navbarItems when user scrolls bellow it
function handleScroll() {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 350) {
    navbarOverlay.classList.add("is-hidden");
    navbarItems.classList.add("is-hidden");
    navbarClick.classList.remove("is-clicked");
  }
}

// Add scroll event listener to the window
window.addEventListener("scroll", handleScroll);

// Event listener for navbar click
navbarClick.addEventListener("click", () => {
  toggleNavClick();
  navbarClickFunction();
});
