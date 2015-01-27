$(document).on('ready', function() {

    $('.container').on('click', function(e) {

        // check if a marker was clicked
        if ($(e.target).hasClass('marker')){
          $(e.target).remove();
          return false;
        }

        var marker = $('<div class="marker">X</div>');
        marker.css({
            top: e.pageY,
            left: e.pageX
        });
        $(this).append(marker);

        var addNote = $('<input placeholder="Enter note">').addClass('addNote');

        $(addNote).appendTo('body').focus().on({
          'blur': function(){
            marker.append('<p>' + this.value);


            this.remove();
          },
          'keyup': function (e) {
            if (e.keyCode == 13) {
              this.blur();
            }
          }

        });
    });



});
