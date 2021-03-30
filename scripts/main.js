$(document).ready(function() {
    $(".nav-link").hover(function() {
        $(this).css("padding-top", "0px");
        $(this).animate({
            "padding-top": "2px"
        }, 200, function() {});
    });
});
