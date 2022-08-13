$(document).ready(function () {
  $('.js-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.banner__navigation--prev',
    nextArrow: '.banner__navigation--next',
    dots: true,
    customPaging: function (slider, i) {
      return `<a class="banner__dot" href="#"></a>`;
    },
    appendDots: '.banner__dots'
  });

  let productLinerSlider = function () {
    $('.js-products-line-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
    })
  }

  productLinerSlider();

  let productPrevSlider = function () {
    $('.js-product-prev__slider').each(function (idx) {
      let carouselId = "carousel" + idx;
      this.closest('.product-prev').id = carouselId;
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: '#' + carouselId + ' .product-prev__colors',
        customPaging: function (slider, i) {
          let color = $(slider.$slides[i]).data('color');
          return '<a class="product-prev__color" style="background-color:' + color + '"></a>'
        }
      })
    })

  }

  productPrevSlider();

  let tabs = function () {
    $('.tabs-navigation__item').click(function () {
      let tabName = $(this).attr('show-tab'),
      tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
      tab = $(tabsBody).find('.' + tabName);
      $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
      $(tab).addClass('tab--active').siblings().removeClass('tab--active');
      if ($(tabsBody).find(' .js-products-line-slider').length) {

        $('.js-products-line-slider').each(function () {
          $(this).slick('refresh');
        });

        $('.js-products-prev-slider').each(function () {
          $(this).slick('refresh');
        });

        $('.js-product-prev__slider').each(function () {
          $(this).slick('refresh');
        });
      }
    })
  }

  tabs();
});

const searchIcon = document.querySelector('.search__icon');
const searchClear = document.querySelector('.search__clear-icon');
const searchBtn = document.querySelector('.search__btn');
const searchBody = document.querySelector('.search__body');
const searchForm = document.querySelector('.search__form');

const openSearchForm = () => {
  searchBody.classList.add('search__body_open');
}

const useSearchForm = () => {
  searchBody.classList.remove('search__body_open');
  searchForm.reset();
}



searchClear.addEventListener('click', () => {
  searchForm.reset();
})

searchIcon.addEventListener('click', openSearchForm);
searchBtn.addEventListener('click', useSearchForm)