$(function () {
    $(".lnk-opener").click(function (e) {
        $(".container").toggleClass("opened");
        e.preventDefault()
    });
    $('.aside').height($('.main-wrapper').height() - $('.header').height());
});

