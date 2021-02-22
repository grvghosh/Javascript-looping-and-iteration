function div(numerator, denominator){
	let div = 0;
    if(denominator==1){
	return numerator;
	}
	
	else{
	while(numerator%denominator==0)
{
div = numerator/denominator;
numerator=div;
}
return numerator;
}

}
var numerator = 100, denominator = 2;
console.log(div(numerator,denominator));
module.exports = div;
