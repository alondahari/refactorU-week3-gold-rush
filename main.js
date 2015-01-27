$(document).on('ready', function() {

    // $('.marker').on('click', function(e){
    //   this.detach();
    // });

    $('.container').on('click', function(e) {

        if ($(e.target).hasClass('marker')){
          $(e.target).remove();
          return false;
        }
        var cordX = e.pageX;
        var cordY = e.pageY;
        var marker = $('<div class="marker">X</div>');
        marker.css({
            top: cordY,
            left: cordX
        });
        $(this).append(marker);
    });

});
