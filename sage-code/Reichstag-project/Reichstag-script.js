var icon = document.getElementById("hamburger");
var box = document.getElementById("nav1");
var x = document.getElementById("x");
var dialog = $("#dialog");
var dialogx = $("#dialog-x");
var overlay = $("#overlay");

setTimeout(function() {
    overlay.off();
    overlay.css({ opacity: "0.6", width: "100%" });
    dialog.show();
}, 1000);

dialogx.on("click", function() {
    overlay.on("click", function() {});
    overlay.css({ opacity: "0", width: "0px" });
    dialog.hide();
});

icon.addEventListener("click", function(e) {
    if (window.innerWidth > 480) {
        box.style.left = "70%";
    } else {
        box.style.left = "50%";
    }
});
x.addEventListener("click", function(e) {
    box.style.left = "100%";
});
