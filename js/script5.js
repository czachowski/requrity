$("#slideshow1 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow1 > div:first')
    .fadeOut(500)
    .next()
    .delay( 800 )
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
},  10000);