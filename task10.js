function sumSeries(number){
var div = 1;
var sum = 0;
    for(let i = 1;i<=number;i++)
	{
		
	div = (1/i);
	
	sum = sum + div;

	}
	return sum.toFixed(2);
}
var number = 567433578;
console.log(sumSeries(number));
module.exports = sumSeries ;

