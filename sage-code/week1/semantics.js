var counter = 0;
function countToTen() {
    console.log(counter);
    counter++;
    if (counter < 10) {
        countToTen();
    }
}
countToTen();
