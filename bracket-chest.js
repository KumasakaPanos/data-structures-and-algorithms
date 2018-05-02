'use strict';
function Node(content,next){
    this.content=content;
    this.next=next;
}
function Stack(){
    this.head=null;
    this.push=function(content){
        let newNode=new Node(content,this.head);
        this.head=newNode
    }
    this.pop=function(){
        let content=this.head.content;
        this.head=this.head.next;
        return(content);
    }
}
bracketChecker=function(input){
    let bracketStorage=new Stack();
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