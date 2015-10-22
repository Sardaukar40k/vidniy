$(document).ready(function () {
  $(".map-trigger").on("click", function() {
    if( $(".map").hasClass("hidden-map") ) {
      $(".map>iframe").animate({
        'height' : '600px'
      }, 500 );
      $(".map").removeClass("hidden-map");
    }
    else {
      $(".map>iframe").animate({
        'height' : '60px'
      }, 500);
      $(".map").addClass("hidden-map");
    }
  });
});