document.addEventListener('DOMContentLoaded', function () {
  rangeSliderInit();
});

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

$('.services-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: $('.slider-arrow--category-prew'),
  nextArrow: $('.slider-arrow--category-next'),
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

$('.services-offer-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: $('.slider-arrow--offer-prew'),
  nextArrow: $('.slider-arrow--offer-next'),
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

$('#productCardSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: true,
  speed: 200,
  fade: true,
  customPaging: function (slider, i) {
    const thumb = $(slider.$slides[i]).data('image');
    return `<div style="background-image: url('${thumb}');" class="product-slider-pagin"></div>`;
  },
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

const onShowMenuTab = (el, id) => {
  const tab = document.getElementById(id);
  const tabName = el.getAttribute('name');
  const tabsByName = document.querySelectorAll(`[data-tab-name="${tabName}"]`);
  for (const tabByName of tabsByName) {
    tabByName.classList.remove('show');
  }
  tab.classList.add('show');
};

const onSpoilerCatagoryToogle = (el) => {
  el.classList.toggle('opened');
  $(el).siblings('.category-spoiler-list').slideToggle(200);
};

const onAddBasket = (el) => {
  el.classList.toggle('active');
};
const onAddFavorites = (el) => {
  el.classList.toggle('active');
};
const rangeSliderInit = () => {
  $('.catalog-range').slider({
    range: true,
    min: 0,
    max: 100000,
    values: [550, 17999],
    slide: function (event, ui) {
      $('#firstVal').html(ui.values[0]);
      $('#nextVal').html(ui.values[1]);
    },
  });
  $('#firstVal').html($('.catalog-range').slider('values', 0));
  $('#nextVal').html($('.catalog-range').slider('values', 1));
};

const onCounterMinus = (id) => {
  let val = getCounterVal(id);
  if (val > 0) {
    --val;
  }
  setCounterVal(id, val);
};

const onCounterPlus = (id) => {
  let val = getCounterVal(id);
  ++val;
  setCounterVal(id, val);
};

const getCounterVal = (id) => {
  return document.getElementById(id).value;
};

const setCounterVal = (id, val) => {
  document.getElementById(id).value = val;
};
