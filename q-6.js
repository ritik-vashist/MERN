let num =12345;
let temp=num;
let rem=0;
let rev_num=0;
while(num>0)
{
    rem=num%10;
    rev_num=rev_num*10+rem;
    num=Math.floor(num/10);
}
console.log(rev_num +" is the reverse of num-"+temp);