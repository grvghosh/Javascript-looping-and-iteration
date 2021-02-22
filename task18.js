function gcd(num1, num2){
    if(num1>0&&num2>0)
	{
	while(num2)
	{
	let temp = num2;
	num2 = num1%num2;
	num1 = temp;
	}
	}
	return num1;
}
var num1= 56875888, num2 = 9866;
console.log(gcd(num1, num2));
module.exports = gcd ;
