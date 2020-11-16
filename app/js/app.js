document.addEventListener('DOMContentLoaded', function () {});

$('#mainSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: true,
  prevArrow: $('.slider-arrow--main-prew'),
  nextArrow: $('.slider-arrow--main-next'),
  customPaging: function (slider, i) {
    return `<button class="main-slider-pagin"><span class="visually-hidden">Слайд ${
      i + 1
    }</span></button>`;
  },
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       dots: false,
  //       slidesToShow: 1,
  //       arrows: false,
  //     },
  //   },
  // ],
});

$('#productSlider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: $('.slider-arrow--product-prew'),
  nextArrow: $('.slider-arrow--product-next'),
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       dots: false,
  //       slidesToShow: 1,
  //       arrows: false,
  //     },
  //   },
  // ],
});
$('#productSliderNew').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: $('.slider-arrow--product-new-prew'),
  nextArrow: $('.slider-arrow--product-new-next'),
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       dots: false,
  //       slidesToShow: 1,
  //       arrows: false,
  //     },
  //   },
  // ],
});

$('#productSliderSpecial').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: $('.slider-arrow--product-special-prew'),
  nextArrow: $('.slider-arrow--product-special-next'),
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       dots: false,
  //       slidesToShow: 1,
  //       arrows: false,
  //     },
  //   },
  // ],
});

$('#socialSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: $('.slider-arrow--social-prew'),
  nextArrow: $('.slider-arrow--social-next'),
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       dots: false,
  //       slidesToShow: 1,
  //       arrows: false,
  //     },
  //   },
  // ],
});

const onShowTab = (el, id) => {
  const tab = document.querySelector(id);
  const tabName = el.getAttribute('name');
  const tabsByName = document.querySelectorAll(`[data-tab-name="${tabName}"]`);
  for (const tabByName of tabsByName) {
    tabByName.classList.remove('tab-item--show');
  }
  tab.classList.add('tab-item--show');
  if (tabName === 'product-nav') {
    $('#productSlider').slick('refresh');
    $('#productSliderNew').slick('refresh');
    $('#productSliderSpecial').slick('refresh');
  }
};
