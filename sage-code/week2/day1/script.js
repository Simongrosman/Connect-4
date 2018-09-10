var stuff = document.getElementById("stuff");
// console.log(stuff);
var divs = document.getElementsByTagName("div");
// console.log(divs);
// var maindiv = document.getElementsByClassName("main-div");
// console.log(maindiv);
var p = document.querySelector("p");
// console.log(p);
var alldivs = document.querySelectorAll(".main-div");
// console.log(alldivs);
var secondp = document.getElementById("realdeal");
console.log(secondp);
secondp.style.backgroundColor = "pink";
secondp.style.fontSize = "50px";
secondp.style.fontStyle = "gutmanyad";
//
// for (var i = 0; i < alldivs.length; i++) {
//     console.log(alldivs[i]);
//     alldivs[i].style.backgroundColor = "navy";
// }
// document.body.innerHTML = "I am a crazy body inner html";

// alldivs.innerHTML = "WOOHOO";

var newDiv = document.createElement("div");
var text = document.createTextNode("this is my new text");

newDiv.appendChild(text);
document.body.appendChild(newDiv);
