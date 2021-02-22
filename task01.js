function getMultiple (number) {
let i = 1;
let prod = 1, sum = 0;
while(i<=10){
prod = number*i;
sum = sum + prod;
i++;
}
return sum;
}
var number = 10;
console.log(getMultiple(number));
module.exports = getMultiple;

