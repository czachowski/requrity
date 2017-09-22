$(document).ready(function(){
        startAnimation();
        function startAnimation(){
            $('div.start.btn1').animate({opacity: '0.4'},1000);
            $('div.start.btn1').animate({opacity: '1'},1000,startAnimation);
        }
});