let n=5;
let row=0;
while(row<n)
{
    
let column=0;
    while(column<(2*n))
    {
        if((column<=(row))||(column>=((2*n-1)-row)))
        {
            process.stdout.write("*");
        }
        else
        {
            process.stdout.write(" ");
        }
        column++;
    }
    process.stdout.write("\n");
    row++;
}
row-=2;//since -1 for decreament of row and second -1 for (i mean row was n+1 as while loop state false so for setting row = n)
while(row>=0)
{
    let column=0;
    while(column<(2*n))
    {
        if((column<=(row))||(column>=((2*n-1)-row)))
        {
            process.stdout.write("*");
        }
        else
        {
            process.stdout.write(" ");
        }
        column++;
    }
    process.stdout.write("\n");
    row--;
}