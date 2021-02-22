
function armstrong(number){
let sum = 0;
let temp = number;var n = 0; let tempo = number;
while(tempo>0){let rem = tempo % 10;

    n++;

     tempo = parseInt(tempo / 10);}
while (temp > 0) {

    let remainder = temp % 10;

    sum += Math.pow(remainder,n);

     temp = parseInt(temp / 10);
}

if (sum == number)
    return true;
else
    return false;

}
var number = 56875;
console.log(armstrong(number));
module.exports = armstrong ;
