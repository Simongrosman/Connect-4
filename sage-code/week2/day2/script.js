// var firstli = document.querySelector("li");
//
// firstli.addEventListener("click", function(e) {});

math.random() * 10;
rgb;

var chas = "abcdef123456789";
chars[math.floor[math.random * 16]];


<a href="javascript:alert('hi!')">click me</a>

document.addEventListener('click', function() {
    console.log('There was a click somewhere on the page!');
});

document.body.addEventListener('click', function() {
    console.log('There was a click on the body element!');
});

document.documentElement.addEventListener('click', function() {
    console.log('There was a click on the html element!');
});

document.body.addEventListener('click', function() {
    console.log('A click was captured on the body element!');
}, true);

document.documentElement.addEventListener('click', function() {
    console.log('A click was captured on the html element!');
}, true);

document.addEventListener('click', function() { //event propagation --> the event moving through the tree
    console.log('A click was captured on the document!');
}, true);

(function() {
    var firstLi = document.querySelctor("li");
    var ol = document.querySelctor("ol");

    firstLi.addEventListener("mouseover", function(event) {
        console.log("lililili");
    });
document.querySelctor
    firstLi.addEventListener('click', function(e){
        alert('li');
        e.stopPropagation();


    ol.addEventListener("mouseover", function(e) {
        console.log(e.currentTarget); // the event which is currently bubbling
        //Target is the element to which the event is really happening, too.
ol.addEventListener('click', function(){
    alert('ol');
})
    });
})();
