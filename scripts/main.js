$(document).ready(function() {
    $(".nav-link").hover(function() {
        $(this).css("padding-top", "0px");
        $(this).animate({
            "padding-top": "2px"
        }, 200, function() {});
    });
    
    $(".star").each(function(i,obj) {
        setInterval(function() {
            starFall(obj);
        }, 2300+i*600);
    });
});


function starFall(star) {
    var starTopStart = parseInt($(star).css("top").slice(0,-2));
    var starLeftStart = parseInt($(star).css("left").slice(0,-2));
    $(star).animate({
        "opacity": "1",
        "top": (400+starTopStart).toString()+"px",
        "left": (400+starLeftStart).toString()+"px"
    }, 2000, "linear", function() {
        $(star).animate({
            "opacity":"0"
        },200, function() {
            $(star).css("top", Math.floor(Math.random()*150).toString()+"px")
            $(star).css("left",Math.floor(Math.random()*800).toString()+"px")
        });
    });
}
