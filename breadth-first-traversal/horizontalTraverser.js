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
        this.returnValue=0;
        this.mapper(this.head);
        return(this.returnValue);
    }
    this.mapper=(Node)=>{
        if(Node.content>this.returnValue)
        {this.returnValue=Node.content}
        this.mapper(Node.left);
        this.mapper(Node.right)
    }
}
module.exports=Tree;