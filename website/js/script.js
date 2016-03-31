/**
 * Created by travisselland on 1/26/16.
 */

$(function() {
    $(".menu_show").on('click.menuOpen', function(){
        $(".flex_nav ul").slideDown().addClass("menu_show");
    }, function(){
        $(".flex_nav ul").slideDown().removeClass("menu_show");
    });

    $("header h1").fadeIn(1000);
});