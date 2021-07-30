$(document).ready(function () {   

    if (isMobile()){
        $(".header__burger, .header__link").click(function (e) {
            $(".header").toggleClass('active');
            $('body').toggleClass('lock');
        });
    } else {
        $('.header__link').click(smoothScrolling);
    }

    $(window).on('scroll', scrollMenu);
});

function isMobile(){
    return $(window).width() <= 700;
}

function smoothScrolling(){
    const header_height = $('.header').height();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - header_height
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });
    return false;
}

function scrollMenu(){
    var windowTop = $(window).scrollTop();
    var headerHeight = $('.header').height();

    for (const section of $('section')) {
        var sectionTop = $(section).offset().top;
        if (sectionTop - headerHeight <= windowTop + 1
            &&)
            changeCurrentLink($(section));
    }
    
}

function changeCurrentLink(section){
    var id = $(section).attr('id');
    var currentLink = $('.header__link[href="#'+id+'"]');
    if ($(currentLink) !== $('.header__link.activ')){
        $('.header__link.activ').removeClass('activ');
        $(currentLink).addClass('activ');
    }
}
