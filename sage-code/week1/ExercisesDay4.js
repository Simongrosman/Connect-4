//part 1

function each(anything, callback) {
    if (Array.isArray(anything))
        for (var property in anything) {
            callback(anything[property], property);
        }
    else if (typeof anything === "object") {
        for (var property in anything) {
            callback(anything[property], property);
        }
    }
}

each();

// //part 2
//
var arr = [0, 1, 2, 3];

function NewArray(obj) {
    var newarray = obj.slice().reverse();
    return newarray;
}

NewArray(arr);

// // //part 3

function getLessThanZero(arr) {
    var neg = arr.filter(elem => elem < 0);
    console.log(neg);
    return neg;
}

getLessThanZero([1, 2]);
