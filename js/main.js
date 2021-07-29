$(document).ready(function () {   

    $(".header__burger").click(function (e) {
        $(".header").toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__link').click(function (e) {
        if (!$('.header').hasClass('activ')){
            $(".header").toggleClass('active');  
        }
        $('body').toggleClass('lock'); 
    });
});

 $(window).on('scroll', function () {
    let windowScrollTop = $(window).scrollTop();
    let seсtionList = $('section');
    let lastSection = seсtionList[0];

    for (const e of seсtionList) {
        let offsetTop = $(e).offset().top;
        if (windowScrollTop <= offsetTop - 88){
            let id =$(lastSection).attr('id');
            changeHeaderLink(id);
            break;
        }
        if (e === seсtionList[seсtionList.length - 1]){
            let id =$(e).attr('id');
            changeHeaderLink(id);
        }
        lastSection = e;
    }
});

function changeHeaderLink(id) {
    $('.header__link.activ').removeClass('activ');
    for (const link of $('.header__link')) {
        if ($(link).attr('href') == "#" + id){
            $(link).addClass('activ');
            break;
        }
    }
}
