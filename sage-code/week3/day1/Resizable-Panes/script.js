console.log("HI!", $);

var bar = $("#bar");
var container = $("#container");
var offset = container.offset();
var topimg = $("#topimg");
var img = $("img");

$(document).ready(function() {
    bar.on("mousedown", function(e) {
        container.on("mousemove", function(e) {
            var x = e.pageX - offset.left;
            console.log(x);
            if (x < 775) {
                bar.css("left", x + "px");
                topimg.css("width", x + "px");
            }
        });
    });
});
$(document).on("mouseup", function(e) {
    container.off("mousemove");
});
