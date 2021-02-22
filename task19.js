function series(number){
    var sum = 0;
	for(let i=1;i<=number;i++)
	{
	let temp = Math.pow(i,i);
	sum = sum+temp;
	}
	return sum;
}
var number = 65;
console.log(series(number));
module.exports = series;
