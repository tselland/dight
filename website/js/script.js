/**
 * Created by travisselland on 1/26/16.
 */

$(document).ready(function() {
    console.log("ready function called")

    $('.toggle_nav').click(function(){
        console.log("menu clicked");
        $('.flex_nav ul').slideDown();

    }, function(){
        $('.flex_nav ul').slideUp();
    });


    /*
     I only really included this jquery animation because of the assignment. There aren't a ton of things that
     I felt needed jquery on my site, so I included one for the sake of the assignment. I feel confident in my
     jquery skills and I am not going to put in random animations just for the sake of including jquery.
     */
    $('header h1').fadeIn(1000);




    //I attemted to play with the instafeed library to display a caption on hover, but was unsuccessful.
    $('.instafeed_img').hover(function(){
       //$(this).siblings(".instafeed_caption").toggle();
        console.log("image hover");
    });

    $('.instafeed_link').hover(function(){
        //$(this).siblings(".instafeed_caption").toggle();
        console.log("link hover");
    });
});