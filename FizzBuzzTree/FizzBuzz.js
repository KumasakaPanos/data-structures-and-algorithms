function Tree()
{
    this.head;

    this.Node=function(content)
    {
        this.key=content;
        this.left;
        this.right;
    }
    
    this.FizzBuzz=()=>
    {
        this.Traverser(this.head);
        return(this);
    }
    
    this.Traverser=(currentNode)=>
    {
        console.log(currentNode.key);
        if((currentNode.key%15)===0)
        {
            currentNode.key='FizzBuzz';
        }
        if((currentNode.key%3)===0)
        {
            currentNode.key='Fizz';
        }
        if((currentNode.key%5)===0)
        {
            currentNode.key='Buzz';
        }
        console.log(currentNode.key);

        if(currentNode.left){
            currentNode.left.key=this.Traverser(currentNode.left);
        }
        if(currentNode.right){
            currentNode.right.key=this.Traverser(currentNode.right);
        }

        return(currentNode.key);
    }}
module.exports=Tree;