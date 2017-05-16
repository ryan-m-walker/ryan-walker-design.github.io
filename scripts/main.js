$(document).ready(function() {

//About Me Modal
  $("#about-me-modal").hide(0);
  $("#about-button").click(function() {
    $("#about-me-modal").toggle("blind", 400, "swing");
    $(this).text(function(i, v){return v === 'HIDE' ? 'ABOUT/CONTACT' : 'HIDE' });
  });

//About Project Modal
  $("#about-project-modal").hide(0);
  $("#about-project-button").click(function() {
    $("#about-project-modal").toggle("blind", 400, "swing");
    $(this).text(function(i, v){return v === 'HIDE' ? 'ABOUT THIS PROJECT' : 'HIDE' });
  });


//Image hover states
  $(".work-home-img").hover(function() {
    $(this).animate({opacity:0.8}, 300);
  }, function() {
    $(this).animate({opacity:1}, 300);
  });



//Return to top button
  $("#return").click(function() {
      $('html, body').animate({scrollTop: $("#top").offset().top}, 300, "swing");
  });









});
