'use strict';

bracketChecker=function(input){
    let bracketStorage=new Array();
    for(let i=0;i<input.length;i++)
    {
        switch(input[i]){
        case '(':
        case '{':
        case '[':
            bracketStorage.push(input.charCodeAt(i));
            break;
        case '}':
        case ']':
        if(input.charCodeAt(i)-2!==bracketStorage.pop())
        {return(false)};
        break;
        case ')':
        if(bracketStorage.pop()!==40)
        {return(false)};
        break;
        default:
        }
    }
    if(bracketStorage[0]!==null)
    {return(false)};
    return(true);
}