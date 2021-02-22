
function round(number) {
    while (number % 10) {
        number++;
    }
    return number;
}
var number = 100;
console.log(round(number));
module.exports = round;
