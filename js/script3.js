function update() {
  if ($(window).scrollTop() > 900) {
    $('.plywak').fadeIn(500);
  } else {
    $('.plywak').fadeOut(300);
  }
}
setInterval(update, 1);
