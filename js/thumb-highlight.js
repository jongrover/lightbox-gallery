$(document).ready(function() {

  $('#gallery img').fadeTo(0, 0.35);

  $('#gallery img').hover(function () {
    // mouse on
    $(this).fadeTo(200, 1);
  }, function () {
    // mouse off'
    $(this).fadeTo(400, 0.35);
  });

});


// selecting div id gallery
// $('#gallery')

// core javascript
// document.getElementById('gallery')
