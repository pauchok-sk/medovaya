export default function sliders() {
  const advSlider = document.querySelector(".s-adv__slider");

  if (advSlider && window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper(advSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: {
        el: ".s-adv .slider-pagination",
        clickable: true
      }
    })
  }
}