$(function () {

    $
    ("#menu-toggle").click(function (e) {
        $("#wrapper").toggleClass("toggled");
        e.preventDefault()
    });
    $(".btn-instance").click(function (e) {
        $("#wrapper").addClass("toggled");
        e.preventDefault()
    });
    $(".lnk-back").click(function (e) {
        $("#wrapper").removeClass("toggled");
        e.preventDefault()
    });
    $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

    $("#menu-icon").on("click", function () {
        $("nav").slideToggle("normal");
        $(this).toggleClass("active");
    });
});

