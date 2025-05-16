document.body.classList.remove("noscroll"); // Remove no-scroll class from body on page load
const bar = document.getElementById("bar"); // For open icon in navbar
const close = document.getElementById("close"); //For close icon in navbar
const nav = document.getElementById("navbar");
let mainImage = document.getElementById("mainImg"); //For main image in product page
let smallImages = document.getElementsByClassName("smallImg"); // For small images in product page
const scrollButton = document.getElementById("scrollBtn"); // For scroll to top button

// Open Navbar
const openNav = () => {
  nav.classList.add("active");
  document.body.classList.add("noscroll");
};

// Close Navbar
const closeNav = () => {
  nav.classList.remove("active");
  document.body.classList.remove("noscroll");
};

// Open and close navbar when clicking on the bar icon or close icon
if (bar) {
  bar.addEventListener("click", openNav);

  if (close) {
    close.addEventListener("click", () => {
      closeNav();
    });
  }

  // Close navbar when clicking outside of it
  window.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !bar.contains(event.target)) {
      closeNav();
    }
  });
}

// Change Product main image on small image click in product page
Array.from(smallImages).forEach((smallImg) => {
  smallImg.addEventListener("click", function () {
    mainImage.style.opacity = "0"; // Fade out
    setTimeout(() => {
      mainImage.src = this.src;
      mainImage.style.opacity = "1"; // Fade in
    }, 150); // Match this with your CSS transition duration
  });
});

// Scroll Button to apppear after scrolling 300px
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
};

// Scroll to top when the button is clicked
scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
