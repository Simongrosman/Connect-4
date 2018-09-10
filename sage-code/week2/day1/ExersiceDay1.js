// // // part1
function changestyle(selector) {
    var changed = document.querySelectorAll(selector);
    for (var i = 0; i < changed.length; i++) {
        console.log(changed[i]);
        changed[i].style.textDecoration = "underline";
        changed[i].style.fontStyle = "italic";
        changed[i].style.fontWeight = "bold";
    }
}
changestyle(".main-div");

// // part2

function changestyle(classname) {
    var changed = document.getElementsByClassName(classname);
    var realarray = [];
    for (var i = 0; i < changed.length; i++) {
        realarray.push(changed[i]);
    }
    return realarray;
}
changestyle("justadiv");

console.log(changestyle("justadiv"));

// // // part 3

function intoyourbody() {
    var newElement = document.createElement("div");
    var text = document.createTextNode("AWESOME");
    newElement.appendChild(text);

    newElement.style.position = "fixed";
    newElement.style.zIndex = "2147483647";
    newElement.style.left = "20px";
    newElement.style.top = "100px";
    newElement.style.fontSize = "200px";

    document.body.appendChild(newElement);
}
intoyourbody();
