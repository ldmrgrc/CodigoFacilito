import Slider from "./slider";
import elements from "./elements";

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let slider = new Slider({
  elements,
  animationFunc: function (element) {
    textContent.classList.add("hide");
    sliderImage.classList.add("hide");

    setTimeout(() => {
      textContent.classList.remove("hide");
      sliderImage.classList.remove("hide");
      sliderTitle.innerHTML = element.title;
      sliderSubtitle.innerHTML = element.subtitle;
      sliderImage.src = element.image;
      sliderText.innerHTML = element.text;
    }, 600);
  },
  speed: 5000,
});

slider.play();

// setTimeout(() => {
//   slider.stop();
// }, 8000);
