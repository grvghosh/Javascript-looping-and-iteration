function findMax(number){
let sum=0;
let i=1;
while(sum<=number)
{
sum=sum+i;
i++;
}
return i-2;
}
var number = 10;
console.log(findMax(number));
module.exports = findMax;
