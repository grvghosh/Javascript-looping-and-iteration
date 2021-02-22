function multiple(number){
let i = 1; 

let prod = 1, sum = 0;
while(i<=number){
let j=1;
while(j<=10){
prod = i*j;
sum = sum + prod;
j++;
}//j loop ends
i++;


}//i loop ends
return sum;
}//function ends
var number = 10;
console.log(multiple(number));
module.exports = multiple ;
