$(function () {
    $(".lnk-opener").click(function (e) {
        $(".container").toggleClass("opened");
        e.preventDefault()
    });

});

