function update() {
  if ($(window).scrollTop() > 900) {
    $('.navbar').addClass("tlo-navbar");
  } else {
    $('.navbar').removeClass("tlo-navbar");
  }
}
setInterval(update, 1);
