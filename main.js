$(document).ready(function(){
    $(".menu").click(function(){
        $(".bar").toggleClass("close");
        $(".container").toggleClass("open");
        $(".menu-li").toggle();
    });
});

$(document).ready(function() {
    var content = $('.content');

    $('#trigger').live('click', function() {
        $(this).toggle(function() {
            $(this).text('Hide Areas!');
            content.removeClass('reverse').addClass('running');
        }, function() {
             $(this).text('Show Areas!');
            content.removeClass('running').addClass('reverse');
        }).trigger('click');
    });

});