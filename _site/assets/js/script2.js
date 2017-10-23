$(document).ready(function(){
        startAnimation();
        function startAnimation(){
            $('.start-btn').animate({opacity: '1'},1000);
            $('.start-btn').animate({opacity: '0.4'},1000,startAnimation);
        }
});