function prime(num) {
    for (var i = num + 1;; i++) {
        var isprime = true;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                isprime = false;
                break;
            }
        }
        if (isprime==true) {
            return i;
        }
    }
}
var num = 56;
console.log(prime(num));
module.exports = prime ;
