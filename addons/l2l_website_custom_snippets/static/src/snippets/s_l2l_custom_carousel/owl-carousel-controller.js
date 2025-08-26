$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        margin: 10,
        nav: false,
        autoWidth: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
    });


    $(".carousel-btn-right").click(function () {
        console.log('clicked right');
        $(this).closest(".carousel-container").find(".owl-carousel").find(".owl-nav").find(".owl-next").click();
    });
    $(".carousel-btn-left").click(function () {
        console.log('clicked left');
        $(this).closest(".carousel-container").find(".owl-carousel").find(".owl-nav").find(".owl-prev").click();
    });
});