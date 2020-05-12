$(document).ready(function() {

$('.mobile-wrap').on('click', function() {
   $('.line-burger').toggleClass('line-active');
   $('.main-header__box').toggleClass('main-header__box--active');
   $('.main-header__list').slideToggle();
});

 $(window).resize(function() {
    if ($(window).width() >= 650) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  });

$('.main-header__button button').on('click', function(e) {
    $('.main-header__input').trigger('focus');
    $('.main-header__search').addClass('main-header__search-active');
  });

  $('html').on('click', function(e) {
    if (!$(e.target).is('.main-header__button button, .main-header__input, main-header__search-wrap, main-header__search-wrap, main-header__search-btn')) {
      $('.main-header__search').removeClass('main-header__search-active');
    }
  });

$('table').wrap('<div class="price__block">');

  function validate(input, length, regExp, error, phone) {

    $(input).on('blur keyup', function() {
      var value = $(this).val();
      var that = $(this);

      regExp = regExp == '' ? /./ : regExp;

      if (phone === true) {
        bool_reg = !regExp.test(value);
      } else {
        bool_reg = regExp.test(value);
      }

      if (value.length > length && value !== '' && bool_reg) {
        that.removeClass('form-fail').addClass('form-done');
        $(error).slideUp();
      } else {
        that.removeClass('form-done').addClass('form-fail');
        $(error).slideDown();
      }
    });

  }

  // деакцивация кнопки если есть поле с ошибкой

  function disBtn(input, btn) {
    var input = $(input);
    input.on('blur keyup', function() {

      if (input.hasClass('form-fail')) {
        $(btn).attr('disabled', 'disabled');
      } else {
        $(btn).removeAttr('disabled');
      }

    });

  }

  // для проверки при нажатии

  function valClick(input, length, regExp, error, btn, phone) {
    var value = $(input).val();

    regExp = regExp == '' ? /./ : regExp;

    if (phone === true) {
      bool_reg = regExp.test(value);
    } else {
      bool_reg = !regExp.test(value);
    }

    if (value.length < length && value === '' && bool_reg) {
      $(input).addClass('form-fail');
      $(error).slideDown();
    }
  }

  //  деакцивация кнопки при нажатии

  function disBtnClick(input, btn) {
    var input = $(input);

    if (input.hasClass('form-fail')) {
      $(btn).attr('disabled', 'disabled');
      return false;
    } else {
      return true;
    }

  }

  $('input[type="tel"]').mask("+38 (999) 999-99-99");

  var regName = /^[a-zA-Zа-яА-ЯёЁ]+/;
  var regPhone = /[_]/i;

  // пример использования
  validate('#c_name', 1, regName, '.contacts__fail-name');
  validate('#c_phone', 1, regPhone, '.contacts__fail-phone', true);
  disBtn('#c_name, #c_phone', '.contacts__btn');


 var stock__clients = $(".stock__slider.owl-carousel");
  stock__clients.owlCarousel({
        dots: true,
        nav: false,
        loop: true,
        smartSpeed: 4000,
        animateOut: 'fadeOut',
        navText: '',
        mouseDrag: false,
        touchDrag: false,
        responsive:{
        0:{
            items: 1,

        },
       
        }
    });


});