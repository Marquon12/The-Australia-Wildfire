$(document).ready(function() {});


// [x] hide text under image
// [x] listen to the button click
// [ ] when button click happen i want the to hide the image and should the text under
$(".health").hide();
$(".Cost").click(function() {
    //alert('hello');
    $(".health").show();
    $(".one").hide();
});

$(".volunteer").hide();
$(".rethink").click(function() {
    $(".volunteer").show();
    $(".health").hide();


    /*    $(".img").hide();
        $(".").hide();
        $(".").fadeIn();
        $(".").hide();
        $(".").hide();
        $(".").hide();*/
});