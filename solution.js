module.exports=function findCommon(input)
{
    if(input == null||input == '')
    {
        return('Invalid input');
    }
    let storer=new Array;
    input=input.toLowerCase();
    input=input.replace(/[^0-9a-z\s]/gi, '');
    input=input.split(' ');
    for(let i=0;i<input.length;i++)
    {
        if(storer[input[i]])
        {
            return input[i];
        }
        storer[input[i]]=' ';
    }
    return('No matches found');
}