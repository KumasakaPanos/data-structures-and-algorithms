let Node=require('./node');

module.exports=Tree(data)
{
    this.head=new Node(data);
    this.equalizer='left'
    this.add=function(data)
    {
        this.__add(this.head,data);
    }
    this.__add=function(data,node)
    {
        if(!node.children)
        {
            node.children.left=new Node(data);
            return('placed')
        }
        if(node.children.left&&!node.children.right)
        {
            node.children.right=new Node(data);
            return('placed')
        }

        if(node.children.left&&node.children.right)
        {
            if(this.equalizer==='left')
            {
                this.__add(node.children.left);
                this.equalizer='right';
            }else
            {
                this.__add(node.children.right);
                this.equalizer='left';
            }
        }
    }
}