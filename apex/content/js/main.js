$(document).ready(function() {
    $(".lnk-opener").click(function (e) {
        $(".container").toggleClass("opened");
        e.preventDefault()
    });
    $('.aside').height($('.main-wrapper').height() - 2);
    $('.nav-hamburger a').click(function (e) {
        $(".drop-list").slideToggle();
        e.preventDefault()
    })
});

$( window ).resize(function(){
    $('.aside').height('auto');
    $('.aside').height($('.main-wrapper').height() - 1);
    if ($(window).width()> 740){
        $(".drop-list").show();
    }else {
        $(".drop-list").hide();
    }
});