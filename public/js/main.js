$(document).ready(function () {
  $('.menu-list').hide();
  $('.first').show();

  $('.item').click(function() {
    var id = this.id;

    $('.menu-list').hide();
    $("#menu-"+ id).show();

    $(".item").removeClass('active');
    $("#" + id).addClass('active');
  });

  //burguer menu
  $('#toggle').click(function() {
    if (!$(this).hasClass('active-burguer')) {
      $('.burguer-icon').attr('src', 'img/icons/close.png');
    }else{
      $('.burguer-icon').attr('src', 'img/icons/menu_white.png');
    }
    $(this).toggleClass('fixed');
    $(this).toggleClass('active-burguer');
    $('#overlay').toggleClass('open');
  });

  $('#toggle-menu').click(function() {
    if (!$(this).hasClass('active-burguer')) {
      $('.burguer-icon').attr('src', 'img/icons/close.png');
    }else{
      $('.burguer-icon').attr('src', 'img/icons/menu_dark.png');
    }
    $(this).toggleClass('active-burguer');
    $('#overlay').toggleClass('open');
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}