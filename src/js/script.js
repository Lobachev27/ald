/*Табы вход / регистрация*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.login-tabs__container');
    tabContainers.hide().filter(':first').show();
    $('.login-tabs__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.login-tabs__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Input password*/

$(document).ready(function() {
  $(".input-wrapper.is-password .icon").click(function () {
    if ($(this).closest(".input-wrapper").find(".input").attr('type') == 'password'){
      $(this).closest(".input-wrapper").addClass('show-password');
      $(this).closest(".input-wrapper").find(".input").attr('type', 'text');
    } else {
      $(this).closest(".input-wrapper").removeClass('show-password');
      $(this).closest(".input-wrapper").find(".input").attr('type', 'password');
    }
  });
});

/*Типы авторизации*/

$(document).ready(function() {
  $("#auth-tel").click(function () {
    $(this).closest(".login-tabs__buttons").addClass('login-tabs__buttons-hidden');
    $(this).closest(".login-tabs__container").find(".login-form-tel").removeClass('login-form-hidden');
  });
  $("#auth-contr").click(function () {
    $(this).closest(".login-tabs__buttons").addClass('login-tabs__buttons-hidden');
    $(this).closest(".login-tabs__container").find(".login-form-contr").removeClass('login-form-hidden');
  });
});

/*Регистрация / авторизация в модалке водителя*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.login-tabs__container');
    $('.js-md-tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.js-md-tab').removeClass('active');
      $(this).addClass('active');
      return false;
    });
  });

  $(".js-md-tab").click(function () {
    $(this).closest(".login-tabs").find(".modal-driver__login").removeClass('modal-driver__login-hidden');
    $(this).closest(".login-tabs__buttons").addClass('login-tabs__buttons-hidden');
  });
});

/*Табы в модалке для водителей*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.modal-driver__container');
    tabContainers.hide();
    $('.modal-driver__tab, .user__dd-link').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.modal-driver__tab, .user__dd-link').removeClass('active');
      $(this).addClass('active');
      $('.modal-driver__tabs, .user__dd-link').addClass('hide');
      return false;
    });

    $('.js-back').click(function () {
      tabContainers.hide();
      $('.modal-driver__tabs').removeClass('hide');
      $('.modal-driver__tab').removeClass('active');
    });
  });
});

/*Модалка водителя*/

$(document).ready(function () {
  $(".header-driver .user, .user__dd-link").click(function () {
    $(".modal-driver").addClass("active");
    $("body").addClass("ov-hid");
  });

  $(".modal-driver__close").click(function () {
    $(".modal-driver").removeClass("active");
    $("body").removeClass("ov-hid");
  });

  $(".user").mouseover(function () {
    var menu = $(this).find(".user__dd");
    menu.addClass('active');
    setTimeout(function(){
      menu.removeClass('active');
    }, 2000 );
  });
});

/*Табы с контентом на странице*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.default__container');
    tabContainers.hide().filter(':first').show();
    $('.default__tab.js-tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.default__tab.js-tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Раскрытие блока с заявкой*/

$(document).ready(function() {
  $('.box-request__main').click(function(){
    if ($(this).closest('.box-request').hasClass("active")) {
      $(this).closest('.box-request').removeClass("active");
    } else {
      $(this).closest('.box-request').addClass("active");
    }
  });
});

/*Select*/

$(document).ready(function() {
  $('.input-wrapper .select-selected').click(function(){
    if(!$(this).closest('.input-wrapper').hasClass('is-disabled') && !$(this).closest('.input-wrapper').hasClass('is-readonly')){
      if($(this).closest('.input-wrapper').hasClass('is-active')){
        $(this).closest('.input-wrapper').removeClass('is-active');
      } else {
        $('.input-wrapper').removeClass('is-active');
        $(this).closest('.input-wrapper').addClass('is-active');
      }
    };
  });

  $('.input-wrapper .select-item').click(function(){
    let txt = $(this).text();
    $(this).addClass('is-active');
    $(this).siblings().removeClass('is-active');
    $(this).closest('.input-wrapper').removeClass('is-active');
    $(this).closest('.input-wrapper').addClass('not-empty');
    $(this).closest('.input-wrapper').find('.select-selected').children('span.select-text').text(txt);
  });
});

$(document).mouseup(function(e){
  var el = $(".select");
  if (!el.is(e.target) && el.has(e.target).length === 0) {
    el.closest('.input-wrapper').removeClass('is-active');
  };
});

/*Модальные окна*/

$(document).ready(function() {
  $('.js-popup').click(function(e){
    /*e.preventDefault();*/
    $('.popup').removeClass('show');
    var id = $(this).attr('href');
    $(id).addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.popup__close').click(function(){
    $(this).closest('.popup').removeClass('show');
    $('body').removeClass('ov-hid');
  });

  $(document).mouseup(function (e){
    var el = $(".popup__wrapper");
    if (!el.is(e.target) && el.has(e.target).length === 0) {
      el.closest('.popup').removeClass('show');
      $('body').removeClass('ov-hid');
    }
  });
});

/*Select*/

$(document).ready(function() {
  $('.time__item:not(.type-no-service, .type-busy)').click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    }
  });
});


/*Раскрытие списка центров*/

$(document).ready(function() {
  $('.centers__item-col.col-name').click(function(){
    if ($(this).closest('.centers__item').hasClass("active")) {
      $(this).closest('.centers__item').removeClass("active");
    } else {
      $(this).closest('.centers__item').addClass("active");
    }
  });

  $('.centers__more').click(function(){
    if ($(this).closest('.centers').hasClass("active")) {
      $(this).text("Показать еще");
      $(this).removeClass("active");
      $(this).closest('.centers').removeClass("active");
    } else {
      $(this).text("Свернуть");
      $(this).addClass("active");
      $(this).closest('.centers').addClass("active");
    }
  });
});

/*Уведомления*/

$(document).ready(function() {
  $('.header__warning').click(function(){
    var notification = $(this).find('.warning-notification');
    notification.addClass('active');
    setTimeout(function(){
      notification.removeClass('active');
    }, 5000 );
  });

  $('.header__notification').click(function(){
    var notification = $(this).find('.notification__list');
    notification.addClass('active');
    setTimeout(function(){
      notification.removeClass('active');
    }, 5000 );
  });
});

/*Sidebar*/

$(document).ready(function () {
  $(".header__menu").click(function () {
    $(".sidebar").addClass("active");
    $("body").addClass("ov-hid");
  });

  $(".sidebar__close").click(function () {
    $(".sidebar").removeClass("active");
    $("body").removeClass("ov-hid");
  });

  $(".sidebar__toggle").click(function () {
    if ($(this).closest('.sidebar').hasClass("active")) {
      $(this).closest('.sidebar').removeClass("active");
      $(this).closest('body').find('.header-administrator').removeClass("active-sidebar");
      $(this).closest('body').find('.main-administrator').removeClass("active-sidebar");
    } else {
      $(this).closest('.sidebar').addClass("active");
      $(this).closest('body').find('.header-administrator').addClass("active-sidebar");
      $(this).closest('body').find('.main-administrator').addClass("active-sidebar");
    }
  });
});