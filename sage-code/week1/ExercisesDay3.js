// // PART 1
//
// function sum() {
//     var result = 0;
//     for (var fig in arguments) {
//         result += arguments[fig];
//     }
//     return result;
// }
// console.log(sum(1, 2, 3, 4));

// // PART 2
//
// function waitThenRun(anything) {
//     setTimeout(anything, 1500);
// }
//
// waitThenRun(function() {
//     console.log("Hello!");
// }); // logs 'Hello!' 1.5 seconds later
//
// waitThenRun(function() {
//     console.log("Goodbye!");
// });
// // logs 'Goodbye!' 1.5 seconds later

// // PART 3
//
function fn(number) {
    if (number <= 0 || Number.isNaN(number)) {
        console.log("ERROR");
    } else if (number >= 1000000) {
        console.log(number);
    } else {
        var i = 0;
        while (i <= 1000000) {
            i += number * 10;
        }
        console.log(i);
    }
}
