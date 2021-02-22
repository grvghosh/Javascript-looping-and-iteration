

function times(number) {
var result = 0;

    while (number >= 10) {
        result += 1;
        number = digitSum(number);
    }
	
    function digitSum(number) {

        var digit_sum = 0;
        while (number) {
            digit_sum += number % 10;
            number = Math.floor(number / 10);
        }

        return digit_sum;
    }

    

    return result;
}
var number = 56875;
console.log(times(number));
module.exports = times;
