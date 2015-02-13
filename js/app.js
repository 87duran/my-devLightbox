//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
$(document).ready(function() {

    var $img = $('<img>');
    var $overlay = $('<div id="overlay"></div>');
    var $caption = $('<p></p>');

    $('body').append($overlay);
    $($overlay).append($img);
    $($overlay).append($caption);

    //Overlay shows when image clicked
    $('#imageGallery a').on('click', function(event) {
        event.preventDefault();
        console.log('event prevented, yo');

        var location = $(this).attr('href');

        $img.attr("src", location);

        var captionText = $(this).children().attr('alt');
        $($caption).text(captionText);
        $($overlay).fadeIn("slow");
    });

    //Overlay disappears when clicked
    $('#overlay').on('click', function(event){
        $($overlay).fadeOut("slow");
    });


});








