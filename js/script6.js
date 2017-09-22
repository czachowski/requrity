$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(500)
    .next()
    .delay( 800 )
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  10000);