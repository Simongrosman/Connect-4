// // part 1
document.addEventListener("mousemove", function(e) {
    var box = document.getElementById("box");
    box.style.left = e.pageX - 50 + "px";
    box.style.top = e.pageY - 50 + "px";
});

// part 2

var speech =
    "I,I.D. Number 30743, Retired Lieutenant-General Yitzhak Rabin, a soldier in the Israel Defense Forces, and a soldier in the army of peace; I, who sent regiments into the fire and soldiers to their deaths, I say to you, Your Majesty, the King of Jordan, and I say to you, American friends:Today we are embarking on a battle that has no dead and no wounded, no blood and no anguish. This is the only battle that is a pleasure to wage – the battle for peace. Tomorrow, on the way up to Jerusalem, thousands of flowers will cover the remains of thos rusting armored vehicles, the ones that never made it to the city. Tomorrow, from those silent metal heaps, thousands of flowers will smile to us";
var i = 0;
var newtext = "";
var textarea = document.getElementById("textarea");
textarea.addEventListener("input", function(e) {
    textarea.value = newtext;
    newtext += speech[i];
    i++;
});
// part 3

var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var color = "rgb(" + r + "," + g + "," + b + ")";
var newcolor = "rgb(" + g + "," + r + "," + b + ")";

box.addEventListener("mousedown", function(e) {
    box.style.backgroundColor = color;
});

box.addEventListener("mouseup", function(e) {
    box.style.backgroundColor = newcolor;
});

// part 4
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var color = "rgb(" + r + "," + g + "," + b + ")";

bigbox.addEventListener("click", function(e) {
    bigbox.style.backgroundColor = color;
});
smallbox.addEventListener("click", function(e) {
    smallbox.style.backgroundColor = color;
    e.stopPropagation();
});
