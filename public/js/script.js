$(document).ready(function(){$(function(){var s=$(".login-tabs__container");s.hide().filter(":first").show(),$(".login-tabs__tab").click(function(){return s.hide(),s.filter(this.hash).show(),$(".login-tabs__tab").removeClass("active"),$(this).addClass("active"),!1}).filter(":first").click()})}),$(document).ready(function(){$(".input-wrapper.is-password .icon").click(function(){"password"==$(this).closest(".input-wrapper").find(".input").attr("type")?($(this).closest(".input-wrapper").addClass("show-password"),$(this).closest(".input-wrapper").find(".input").attr("type","text")):($(this).closest(".input-wrapper").removeClass("show-password"),$(this).closest(".input-wrapper").find(".input").attr("type","password"))})}),$(document).ready(function(){$("#auth-tel").click(function(){$(this).closest(".login-tabs__buttons").addClass("login-tabs__buttons-hidden"),$(this).closest(".login-tabs__container").find(".login-form-tel").removeClass("login-form-hidden")}),$("#auth-contr").click(function(){$(this).closest(".login-tabs__buttons").addClass("login-tabs__buttons-hidden"),$(this).closest(".login-tabs__container").find(".login-form-contr").removeClass("login-form-hidden")})}),$(document).ready(function(){$(function(){var s=$(".login-tabs__container");$(".js-md-tab").click(function(){return s.hide(),s.filter(this.hash).show(),$(".js-md-tab").removeClass("active"),$(this).addClass("active"),!1})}),$(".js-md-tab").click(function(){$(this).closest(".login-tabs").find(".modal-driver__login").removeClass("modal-driver__login-hidden"),$(this).closest(".login-tabs__buttons").addClass("login-tabs__buttons-hidden")})}),$(document).ready(function(){$(function(){var s=$(".modal-driver__container");s.hide(),$(".modal-driver__tab").click(function(){return s.hide(),s.filter(this.hash).show(),$(".modal-driver__tab").removeClass("active"),$(this).addClass("active"),$(".modal-driver__tabs").addClass("hide"),!1}),$(".js-back").click(function(){s.hide(),$(".modal-driver__tabs").removeClass("hide"),$(".modal-driver__tab").removeClass("active")})})}),$(document).ready(function(){$(".user").click(function(){$(".modal-driver").addClass("active"),$("body").addClass("ov-hid")}),$(".modal-driver__close").click(function(){$(".modal-driver").removeClass("active"),$("body").removeClass("ov-hid")})}),$(document).ready(function(){$(function(){var s=$(".default__container");s.hide().filter(":first").show(),$(".default__tab.js-tab").click(function(){return s.hide(),s.filter(this.hash).show(),$(".default__tab.js-tab").removeClass("active"),$(this).addClass("active"),!1}).filter(":first").click()})}),$(document).ready(function(){$(".box-request__main").click(function(){$(this).closest(".box-request").hasClass("active")?$(this).closest(".box-request").removeClass("active"):$(this).closest(".box-request").addClass("active")})}),$(document).ready(function(){$(".input-wrapper .select-selected").click(function(){$(this).closest(".input-wrapper").hasClass("is-disabled")||$(this).closest(".input-wrapper").hasClass("is-readonly")||($(this).closest(".input-wrapper").hasClass("is-active")?$(this).closest(".input-wrapper").removeClass("is-active"):($(".input-wrapper").removeClass("is-active"),$(this).closest(".input-wrapper").addClass("is-active")))}),$(".input-wrapper .select-item").click(function(){var s=$(this).text();$(this).addClass("is-active"),$(this).siblings().removeClass("is-active"),$(this).closest(".input-wrapper").removeClass("is-active"),$(this).closest(".input-wrapper").addClass("not-empty"),$(this).closest(".input-wrapper").find(".select-selected").children("span.select-text").text(s)})}),$(document).mouseup(function(s){var t=$(".select");t.is(s.target)||0!==t.has(s.target).length||t.closest(".input-wrapper").removeClass("is-active")}),$(document).ready(function(){$(".js-popup").click(function(s){$(".popup").removeClass("show");var t=$(this).attr("href");$(t).addClass("show"),$("body").addClass("ov-hid")}),$(".popup__close").click(function(){$(this).closest(".popup").removeClass("show"),$("body").removeClass("ov-hid")}),$(document).mouseup(function(s){var t=$(".popup__wrapper");t.is(s.target)||0!==t.has(s.target).length||(t.closest(".popup").removeClass("show"),$("body").removeClass("ov-hid"))})}),$(document).ready(function(){$(".time__item:not(.type-no-service, .type-busy)").click(function(){($(this).hasClass("active")?$(this):($(this).addClass("active"),$(this).siblings())).removeClass("active")})}),$(document).ready(function(){$(".centers__item-col.col-name").click(function(){$(this).closest(".centers__item").hasClass("active")?$(this).closest(".centers__item").removeClass("active"):$(this).closest(".centers__item").addClass("active")}),$(".centers__more").click(function(){$(this).closest(".centers").hasClass("active")?($(this).text("Показать еще"),$(this).removeClass("active"),$(this).closest(".centers").removeClass("active")):($(this).text("Свернуть"),$(this).addClass("active"),$(this).closest(".centers").addClass("active"))})});