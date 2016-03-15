$(function () {
    $(".nav-opener").click(function (e) {
        $(".aside").toggleClass("opened");
        e.preventDefault()
    });

});

