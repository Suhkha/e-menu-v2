var scrolled = 0;
$(document).ready(function () {
  var clientHeight = document.documentElement.clientHeight;
  $('.menu-list').css('height', clientHeight-250)
  
  $(".down-arrow").on("click", function () {
    scrolled = scrolled + 300;
    $(".menu-list").stop().animate({
      scrollTop: scrolled
    });
  });

  $(".up-arrow").on("click", function () {
    scrolled = scrolled - 300;
    $(".menu-list").stop().animate({
      scrollTop: scrolled
    });
  });

  $('.menu-list').scroll(function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      $(".down-arrow").hide();
      $(".up-arrow").show();
    }else if($(this).scrollTop() == 0 ) {
      $(".down-arrow").show();
      $(".up-arrow").hide();
    }
  });

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
    
    if(childHeight < $("#menu-"+ id).innerHeight()) {
      console.log("yes");
      $(".down-arrow").hide();
      $(".up-arrow").hide();
    }else{
      $(".down-arrow").show();
      $(".up-arrow").show();
    }
  });

});