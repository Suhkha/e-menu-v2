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
      $('.burguer-icon').attr('src', 'img/icons/menu.png');
    }
    $(this).toggleClass('active-burguer');
    $('#overlay').toggleClass('open');
  });
});