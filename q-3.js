let num_1 = 81;
let num_2 = 153;
while(num_1!=num_2)
{
    if(num_1>num_2)
    {
        num_1-=num_2;
    }
    else
    {
        num_2-=num_1;
    }
}
console.log(num_1);