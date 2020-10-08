function scrollToElement(element) {
  window.scrollTo({
    behavior: "smooth",
    top: element.offsetTop,
  });
}

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".menu-screen").classList.add("active");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".menu-screen").classList.remove("active");
});
// Selcionamos totos los links que estan dentro del menu screen
let links = document.querySelectorAll(".menu-screen a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.scrollTo) {
      e.preventDefault();
    }
    document.querySelector(".menu-screen").classList.remove("active");
    let path = this.href.split("/");
    const selector = path[path.length - 1];
    scrollToElement(document.querySelector(selector));

    return !!window.scrollTo;
  });
});
