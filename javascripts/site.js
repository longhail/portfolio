$(document).ready(function() {
  $('body').scrollspy({
    target: '#nav',
    offset: 100
  });

  $('#nav ul li a').on('click', function(event) {
      event.preventDefault();
      $.scrollTo(this.hash, 1000, { offset: -100 });
   });
});
