$(document).on('ready', function() {

    $('.container').on('click', function(e) {
        var cordX = e.pageX;
        var cordY = e.pageY;
        var marker = $('<div class="marker">');
        marker.css({
            top: cordY,
            left: cordX
        });
        $(this).append(marker);
    });



});
