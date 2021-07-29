$(document).ready(function () {
    $(".header__burger").click(function (e) {
        $(".header").toggleClass('active');
    });
    $('.header__link').click(function (e) {
        if (!$('.header').hasClass('activ')){
            $(".header").toggleClass('active');     
        }   
    });
});
