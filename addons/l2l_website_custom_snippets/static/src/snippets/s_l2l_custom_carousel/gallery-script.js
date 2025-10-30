$(document).ready(function () {

    $('.carousel-card-image').click(function () {
        var source = $(this).attr("src");
        source = source.replace("thumbnails/", "");

        currentSourceID = $(this).attr("id");

        // 			console.log(source);

        //load the image
        $('.image-fullscreen .inner-screen').attr("src", source);

        //wait until our fullscreen image has loaded.
        $('.image-fullscreen .inner-screen').on('load', function () {
            //set the cursor back to default.
            $('body').css('cursor', '');
            $('.image-gallery .three-picture-section .single-image .gallery-image:hover').css('cursor', 'zoom-in');

            $('.image-fullscreen').css('opacity', 1);
            $('.image-fullscreen').css('z-index', 10000);
            imageFullscreenVisible = true;

            //move exit button to fit on image
            // $('.exit-button').css('left', $('.inner-screen').width() + $('.inner-screen').offset().left - $('.exit-button').width() - 10);
            $('.exit-button').height($('.inner-screen').height());
            $('.exit-button').width($('.inner-screen').width());

            $('.main_menu').toggleClass('main_menu--active', false);
        });
    });

    $('#image-fullscreen-exit').click(function () {
        $('.image-fullscreen').css('opacity', 0);
        $('.image-fullscreen').css('z-index', -10);
        imageFullscreenVisible = false;

        $('.main_menu').toggleClass('main_menu--active', true);
    });

    //if the grey area is clicked, get out of fullscreen
    $('#grey-area').click(function () {
        if (imageFullscreenVisible == true) {
            $('.image-fullscreen').css('opacity', 0);
            $('.image-fullscreen').css('z-index', -10);
            imageFullscreenVisible = false;

            $('.main_menu').toggleClass('main_menu--active', true);
        }
    });
});