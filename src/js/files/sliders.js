export default function sliders() {
  const advSlider = document.querySelector(".s-adv__slider");

  if (advSlider && window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper(advSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: {
        el: ".s-adv .slider-pagination",
        clickable: true,
      },
    });
  }

  const complexSlider = document.querySelector(".s-complex__gallery-slider");

  if (complexSlider) {
    const complexSliderThumb = document.querySelector(
      ".s-complex__thumb-slider"
    );

    const swiperThumb = new Swiper(complexSliderThumb, {
      speed: 700,
      slidesPerView: 4,
      spaceBetween: 10,
      direction: "horizontal",
      breakpoints: {
        1366: {
          slidesPerView: 4,
          direction: "vertical",
        },
      },
    });

    const swiper = new Swiper(complexSlider, {
      speed: 900,
      spaceBetween: 15,
      thumbs: {
        swiper: swiperThumb,
      },
      navigation: {
        prevEl: ".s-complex .slider-arrow._prev",
        nextEl: ".s-complex .slider-arrow._next",
      },
    });
  }

  const stocksSlider = document.querySelector(".s-stocks__slider");

  if (stocksSlider) {
    const swiper = new Swiper(stocksSlider, {
      speed: 900,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".s-stocks .slider-arrow._prev",
        nextEl: ".s-stocks .slider-arrow._next",
      },
      pagination: {
        el: ".s-stocks .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
    });
  }

  const gallerySlider = document.querySelector(".s-gallery__slider");

  if (gallerySlider) {
    const fractionObject = {
      pagination: {
        el: ".s-gallery .slider-fraction",
        type: "fraction",
      },
    };

    const swiper = new Swiper(gallerySlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 4500,
      },
      navigation: {
        prevEl: ".s-gallery .slider-arrow._prev",
        nextEl: ".s-gallery .slider-arrow._next",
      },
      pagination: {
        el: ".s-gallery .slider-pagination",
        clickable: true,
      },
      scrollbar: {
        el: ".s-gallery .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 30,
          slidesPerView: 3,
          ...fractionObject,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: "auto",
          ...fractionObject,
        },
      },
    });
  }
}
