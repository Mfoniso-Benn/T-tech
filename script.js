document.body.classList.remove("noscroll");
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const scrollButton = document.getElementById("scrollBtn");

const openNav = () => {
  nav.classList.add("active");
  document.body.classList.add("noscroll");
};

const closeNav = () => {
  nav.classList.remove("active");
  document.body.classList.remove("noscroll");
};

if (bar) {
  bar.addEventListener("click", openNav);

  if (close) {
    close.addEventListener("click", () => {
      closeNav();
    });
  }

  window.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !bar.contains(event.target)) {
      closeNav();
    }
  });
}

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

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
