let height = $(window).height();
let width = $(window).width();
$(".on-top").css("height", height + "px");

$(window).on("resize",function () {
    let height = $(window).height();
    $(".on-top").css("height", height + "px");
});
