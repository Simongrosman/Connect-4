// // part 1
//
function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

function Square(w) {
    this.width = w;
    this.height = this.width;
}

Square.prototype.getArea = Rectangle.prototype.getArea;

// var square = new Square(4);
// square.getArea(); //16

// var rect = new Rectangle(4, 5);
// rect.getArea(); //20

// part 2
var str = "strRING";

function invertCase(str) {
    var res = str.split("");
    for (var character in res) {
        if (res[character] == res[character].toUpperCase()) {
            res[character] = res[character].toLowerCase();
        } else {
            res[character] = res[character].toUpperCase();
        }
    }
    return res.join("");
}
console.log(invertCase(str));
