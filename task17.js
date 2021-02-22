function factorial(num){
var fact = 1;
if(num>0){
for(let i=1;i<=num;i++)
{
fact = fact*i;
}
}
return fact;
}
var num= 56875;
console.log(factorial(num));
module.exports = factorial ;
