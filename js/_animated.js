$(document).ready(function() {
  $('.animate-fade-left').addClass('.animation-hide').viewportChecker({
    classToRemove : 'animation-hide',
    classToAdd: 'animation-visible animated fadeInLeft',
    offset: 100
  });
});
$(document).ready(function() {
  $('.animate-fade-right').addClass('.animation-hide').viewportChecker({
    classToRemove : 'animation-hide',
    classToAdd: 'animation-visible animated fadeInRight',
    offset: 100
  });
});