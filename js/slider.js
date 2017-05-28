$(document).ready(function() {

    var images = ['work-1.jpg', 'work-2.jpg', 'work-3.jpg', 'work-4.jpg', 'work-5.jpg'];
    var currImg = 0;

    for (var i = 0; i < images.length; i++) {
        $('.imgBlock').append('<div data-img="' + i + '">');
        // $('.imgBlock div').addClass('class_name ' + i);
    };

    // $('.imgBlock div:first').addClass('active');

    $('.imgBlock div').each(function(index, el) {
        // $(this).addClass('img-' + index);
        currImg = $(this).attr('data-img');
        $(this).css('background-image', 'url(img/' + images[currImg] + ')');
        // if ($(this).class = "active") {

        // }

    });



    // $('.data-img').each(function(index, el) {
    //     console.log(index + ": " + $(this).text('some-text'));
    // });







});
