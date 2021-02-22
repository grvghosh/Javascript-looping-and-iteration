function multiply(number){
let fact = 1;
for (let i = 1; i<=number; i++)
{
fact = fact*i;

}
return fact;
}
var number = 100;
console.log(multiply(number));
module.exports = multiply ;
