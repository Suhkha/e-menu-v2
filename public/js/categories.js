$('.menu-list').hide();
$('.first').show();

$('.item').click(function() {
  var id = this.id;

  $('.menu-list').hide();
  $("#menu-"+ id).show();

  $(".item").removeClass('active');
  $("#" + id).addClass('active');

  var childHeight = 0;
  $("#menu-"+ id).children().each(function(){
      childHeight = childHeight + $(this).outerHeight(true);
  });
});