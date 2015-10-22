$(document).ready(function() {
  $('.animate-fade-left').viewportChecker({
    classToAdd: 'animated fadeInLeft',
    classToRemove : 'animation-hide',
    offset: 50
  });
});
$(document).ready(function() {
  $('.animate-fade-right').viewportChecker({
    classToAdd: 'animated fadeInRight',
    classToRemove : 'animation-hide',
    offset: 50
  });
});
$(document).ready(function() {
  $('.animate-fade-down').viewportChecker({
    classToAdd: 'animated fadeInDown',
    classToRemove : 'animation-hide',
    offset: 50
  });
});
$(document).ready(function() {
  $('.animate-zoom-in').viewportChecker({
    classToAdd: 'animated zoomIn',
    classToRemove : 'animation-hide',
    offset: 50
  });
});