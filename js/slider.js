$(document).ready(function() {

    var images = ['work-1.jpg', 'work-2.jpg', 'work-3.jpg', 'work-4.jpg', 'work-5.jpg'];
    var currImg = 0;

    for (var i = 0; i < images.length; i++) {
        $('.imgBlock').append('<div data-img="' + i + '">');
    };


    $('.imgBlock div').each(function(index, el) {
        currImg = $(this).attr('data-img');
        $(this).css('background-image', 'url(img/' + images[currImg] + ')');
    });

});
