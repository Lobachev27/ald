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

    var url_string = window.location.href;
    var id = url_string.split('id=')[1];
    if (id === "events") {
      $('.login-tabs__tab').filter(':last').click();
    }
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