/*function primecount(number)
{
var prime = 0; var count =0;
for(let i=1;i<number;i++)
{
if(prime(i)==true)
count++;
}
return count;
function prime(n){
    var m,j=0;
    for (m=2;m<n;m++){
        if(n%m===0){
            j=1;
        }
    }
    if(j===0){
        return true;
    }
    else{
        return false;
    }
    }

}

var number = 56;
console.log(primecount(number));
module.exports = primecount ;*/

function isPrime(m) 
{
if (m <= 1) 
	{return false;}
for (let i = 2; i < m; i++) 
	{if (m % i == 0) 
		return false; }

return true; 
} 

function primecount(number)
{
var counter = 0;
for (let i = 2; i <= number; i++) 
{ 
	if (isPrime(i)) 
		counter++; 
} 
return counter;
}
var number = 56;
console.log(primecount(number));
module.exports = primecount ;
