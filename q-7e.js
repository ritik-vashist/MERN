function fact(n) 
{
    if((n==0)||(n==1))
    {
        return 1;
    }  
    else
    {
        return (n*fact(n-1));
    }
    return -1;
}
function ncr(n,r)
{
    return (fact(n)/(fact(n-r)*fact(r)));
}

let row=0;
let n=5;
while(row<=n)
{
    let column=0;
    while(column<=row)
    {
        process.stdout.write(" "+ncr(row,column));
        column++;
    }
    process.stdout.write("\n");
    row++;
}
  