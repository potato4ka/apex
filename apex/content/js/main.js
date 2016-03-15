$(document).ready(function() {
    $(".lnk-opener").click(function (e) {
        $(".container").toggleClass("opened");
        e.preventDefault()
    });
    $('.aside').height($('.main-wrapper').height() - 2);
});

$( window ).resize(function(){
    $('.aside').height('auto');
    $('.aside').height($('.main-wrapper').height() - 1);
});