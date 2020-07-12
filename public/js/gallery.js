
$(document).ready(function () {
  $('[data-fancybox="images"]').fancybox({
    loop:true, 
    buttons:["slideShow","share","zoom","fullScreen","close"],
    thumbs:{autoStart:!1}
  });
});