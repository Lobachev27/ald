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
    $('.modal-driver__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.modal-driver__tab').removeClass('active');
      $(this).addClass('active');
      $('.modal-driver__tabs').addClass('hide');
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
  $(".user").click(function () {
    $(".modal-driver").addClass("active");
    $("body").addClass("ov-hid");
  });

  $(".modal-driver__close").click(function () {
    $(".modal-driver").removeClass("active");
    $("body").removeClass("ov-hid");
  });
});