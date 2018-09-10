var image = document.getElementById("image");
var context = image.getContext("2d");

context.strokeStyle = "#900";
context.beginPath();

context.moveTo(100, 70); //move the pan but dont draw
context.lineTo(100, 200); // body
context.lineTo(180, 250); // right leg
context.moveTo(100, 200); //back to balls
context.lineTo(20, 250); // left leg
context.moveTo(100, 120); //back to neck
context.lineTo(20, 70); // left arm
context.moveTo(100, 120); //back to neck
context.lineTo(180, 70); //right arm
context.moveTo(135, 35); //move to head
context.arc(100, 35, 35, 0, 2 * Math.PI); //head;
context.stroke();
//
var canvas = document.getElementById("canvas");
var canvascontext = canvas.getContext("2d");
var x = 100;
var y = 100;

canvascontext.drawImage(image, x, y);

document.addEventListener("keydown", function(e) {
    if (e.keyCode == "38") {
        canvascontext.clearRect(0, 0, 2500, 2000);
        y -= 7;
        canvascontext.drawImage(image, x, y);
    } else if (e.keyCode == "37") {
        canvascontext.clearRect(0, 0, 2500, 2000);
        x -= 7;
        canvascontext.drawImage(image, x, y);
    } else if (e.keyCode == "39") {
        canvascontext.clearRect(0, 0, 2500, 2000);
        x += 7;
        canvascontext.drawImage(image, x, y);
    } else if (e.keyCode == "40") {
        canvascontext.clearRect(0, 0, 2500, 2000);
        y += 7;
        canvascontext.drawImage(image, x, y);
    }
});
