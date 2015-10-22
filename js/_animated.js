$(document).ready(function() {
  $('.animate-fade-left').viewportChecker({
    classToAdd: 'animated fadeInLeft',
    offset: 50
  });
});
$(document).ready(function() {
  $('.animate-fade-right').viewportChecker({
    classToAdd: 'animated fadeInRight',
    offset: 50
  });
});
$(document).ready(function() {
  $('.animate-fade-down').viewportChecker({
    classToAdd: 'animated fadeInDown',
    offset: 50
  });
});
$(document).ready(function() {
  $('.animate-zoom-in').viewportChecker({
    classToAdd: 'animated zoomIn',
    offset: 50
  });
});