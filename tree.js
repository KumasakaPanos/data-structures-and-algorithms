var Node=require('./node');

Tree=function()
{
    this.addNode = function(data,location=this.head)
    {
        if(location===undefined)
        {this.head=new Node(data)
            console.log(this.head);
        return null;}
        if(location.value)
        {
            location.children.push(new Node(data))
        }
    }
}

module.exports=Tree;