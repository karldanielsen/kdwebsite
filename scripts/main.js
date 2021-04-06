$(document).ready(function() {
    if(parseInt($("body").css("width").slice(0,-2))< 700){
        $("#start").append(
            "<div>Hey! Can't help but notice you're browsing on mobile.<br>"+
             "This is a personal website, not built to be viewed on screens<br>"+
             "thinner than 700px. Proceed at your own risk!</div>"
        );
    }
    $(".nav-link").hover(function() {
        $(this).css("padding-top", "3px");
        $(this).animate({
            "padding-top": "5px"
        }, 200, function() {});
    });
    
    $(".star").each(function(i,obj) {
        setInterval(function() {
            starFall(obj);
        }, 2300+i*600);
    });

    $("#msgSubmit").click(function() {
        message();
    });
});


function starFall(star) {
    var starTopStart = parseInt($(star).css("top").slice(0,-2));
    var starLeftStart = parseInt($(star).css("left").slice(0,-2));
    $(star).animate({
        "opacity": "1",
        "top": (200+starTopStart).toString()+"px",
        "left": (200+starLeftStart).toString()+"px"
    }, 1000, "linear", function() {
        $(star).animate({
            "opacity": "0",
            "top": (400+starTopStart).toString()+"px",
            "left": (400+starLeftStart).toString()+"px"
        }, 1000, "linear", function() {
            $(star).animate({
                "opacity":"0"
            },200, function() {
                $(star).css("top", Math.floor(Math.random()*150).toString()+"px")
                $(star).css("left",Math.floor(Math.random()*800).toString()+"px")
            });
        });
    });
}
