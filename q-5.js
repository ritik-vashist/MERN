let num =12321;
let digit=0;
while(num>0)
{
    digit+=1;
    num=Math.floor(num/10);
}
console.log(digit);