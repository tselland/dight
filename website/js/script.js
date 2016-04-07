/**
 * Created by travisselland on 1/26/16.
 */

$(function() {
    $(".toggle_nav").on('click.menuOpen', function(){
        $(".flex_nav ul").slideDown();
    }, function(){
        $(".flex_nav ul").slideUp();
    });

    $("header h1").fadeIn(1000);
});