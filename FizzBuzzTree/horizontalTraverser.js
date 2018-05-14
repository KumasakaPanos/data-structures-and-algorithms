// function  Quene()
// {
//     this.head;
//     this.Node=function(content){
//         this.content=content;
//         this.head;
//     };
//     this.push(content){
//         let newNode=new this.Node(content);

//     }
function Tree()
{
    this.head;

    this.Node=function(content)
    {
        this.left;
        this.right;
        this.content=content;
        this.parent;
    }
    
    
    this.traverser=()=>
    {
        let nodeArray=new Array;
        this.returnValue='';
        let parentNode=this.head;
        let currentRow=this.head;
        this.mapper(this.head,nodeArray);
        while(nodeArray[0]){
            returnValue=`${returnValue} ${nodeArray.shift()}`;
        }
        return(this.returnValue);
    }

    this.mapper=(currentNode,nodeArray)=>
    {
        this.returnValue=`${this.returnValue} ${currentNode.content}`
        if(currentNode.left){
        this.mapper(currentNode.left,nodeArray);
        }
        if(currentNode.right){
        this.mapper(currentNode.right,nodeArray);
        }
    }

    this.Checker=(node)=>
    {
        return(node.value);
    }
}
module.exports=Tree;