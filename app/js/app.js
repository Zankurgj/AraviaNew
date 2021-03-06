document.addEventListener('DOMContentLoaded', function () {
  rangeSliderInit();
  datepickerInit();
  $('#phone').mask('(999) 999-99-99');
  $('#time').mask('99:99');
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
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        dots: false,
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
});
$('.js-product-slider-promo').slick({
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
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        dots: false,
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
});

$('#productSliderSpecial').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: $('.slider-arrow--product-special-prew'),
  nextArrow: $('.slider-arrow--product-special-next'),
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        dots: false,
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
$('.lk-inner-item-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  arrows: true,
  prevArrow: $('.slider-arrow-basked--main-prew'),
  nextArrow: $('.slider-arrow-basked--main-next'),
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
const onToggleSpiolerOrder = (el) => {
  const parent = $(el).parents('.js--spoiler-order-item-parent');
  parent.find('.js--spoiler-order-item').slideToggle(200);
  $(el).toggleClass('opened');
};
onToggleAddressForm = () => {
  document.querySelector('#addressInner').classList.toggle('hide');
  document.querySelector('#addressForm').classList.toggle('show');
};
const datepickerInit = () => {
  $('#date').datepicker();
  $.datepicker.regional['ru'] = {
    prevText: '',
    nextText: '',
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    monthNamesShort: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    dayNames: [
      'воскресенье',
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
    ],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dateFormat: 'dd-mm-yy',
    showButtonPanel: true,
    closeText: '',
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
};
const onToggleSearch = () => {
  const searchSelector = document.querySelector('.main-header-search-inner');
  searchSelector.classList.toggle('main-header-search-inner--show');
  document.querySelector('#search-input').focus();
};

const onShowSubmenu = (el) => {
  $(el).find('.main-header-submenu').addClass('main-header-submenu--show');
};
const onHideSubmenu = (e) => {
  event.stopPropagation();
  $('.main-header-submenu--show').removeClass('main-header-submenu--show');
};

const checkMobile = () => {
  const mobileBp = 1024;
  if (window.innerWidth <= mobileBp) {
    return true;
  }
  return false;
};

const onShowMenu = (el) => {
  el.classList.toggle('btn-hamburger--active');
  const menu = document.querySelector('.main-header--desc');
  menu.classList.toggle('show');
  bodyStopScroll();
};

const bodyStopScroll = () => {
  document.querySelector('body').classList.toggle('body-stop-sroll');
};

const onShowNewAddress = (el, id) => {
  el.classList.toggle('active');
  document.querySelector(`#${id}`).classList.toggle('show');
};
