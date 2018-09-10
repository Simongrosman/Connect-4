// // part 1//
//
// function logtype(arg) {
//     if (Array.isArray(arg)) {
//         console.log("array!");
//     } else if (typeof arg == "boolean") {
//         console.log("boolean!");
//     } else if (Number.isNaN(arg)) {
//         console.log("not a number!");
//     } else if (typeof arg == "undefined") {
//         console.log("undefined!");
//     } else if (!arg) {
//         console.log("null!");
//     } else if (typeof arg == "boolean") {
//         console.log("boolean!");
//     } else if (typeof arg == "number") {
//         console.log("number!");
//     } else if (Number.isNaN(arg)) {
//         console.log("not a number!");
//     } else if (typeof arg == "string") {
//         console.log("string!");
//     } else if (typeof arg == "function") {
//         console.log("function!");
//     } else if (typeof arg == "object") {
//         console.log("object!");
//     } else {
//         console.log("I have no idea!");
//     }
// }
//
// // part 2//
//
// var a = {
//     Berlin: "Germany",
//     Paris: "France",
//     "New York": "USA"
// };
// var b = {};
//
// for (var prop in a) {
//     b[a[prop]] = prop;
// }

// part 3//
var i = 10;
while (i != 0) {
    console.log(i);
    i--;
}
