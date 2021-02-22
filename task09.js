function digitSum (number){
    var rem = 0, sum = 0;
	while(number>=1){
	rem = number%10;
	if(rem%2==0)
	{sum = sum+rem;}
	number = parseInt(number/10);
	}
	return sum;
}
var number = 567433578;
console.log(digitSum(number));
module.exports = digitSum ;
