$(document).ready(function() {

  var partners = $("#partners-carousel");

  partners.owlCarousel ({
    items : 4,
    itemsDesktop : [1920, 4],
    itemsTablet : [600, 2],
    itemsMobile : [480, 1],
    navigation: true,
    navigationText: [
      "<img src='http://gik23.ru/main/wp-content/uploads/2015/06/prev.png' class='control-img'>",
      "<img src='http://gik23.ru/main/wp-content/uploads/2015/06/next.png' class='control-img'>"
    ]
  });
  $(".next-leader").click(function(){
    partners.trigger('owl.next');
  });
  $(".prev-leader").click(function(){
    partners.trigger('owl.prev');
  });

});