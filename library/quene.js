Node = require('./node')
Quene=function(Data){
    this.head=new Node(Data);

    this.enquene=function(Data){
        let currentNode = this.head;
        while(currentNode.next){currentNode=currentNode.next}
        currentNode.next=new Node(Data);
    }
    
    this.dequene=function()
    {
        let returnValue=this.head.value;
        this.head=this.head.next;
        return(returnValue);
    }
}
module.exports=Quene;