function solveCube(number){
let i = 1;
let prod = 1, sum = 0;
while(i<=number)
{
prod = i*i*i;
sum = sum + prod;
i++;
}
return sum;
}
var number = 10;
console.log(solveCube(number));
module.exports = solveCube ;
