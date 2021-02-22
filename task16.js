function NthTerm(number)
{
    if (number == 0)
    {
        return 0;
    }
    else if (number == 1)
    {
        return 1;
    }
    else
    {
        return(NthTerm(number - 1) + NthTerm(number - 2));
    }
}
var number = 6;
console.log(NthTerm(number));
module.exports = NthTerm;

