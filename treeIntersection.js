require('./lib/tree')

module.exports=function treeIntersection(tree,tree2)
{
    let returnString = new String;
    let intersectionMap = new Map;
    __treeIntersection(tree.head);
}

module.exports=function __treeIntersection(node)
{
    if(intersectionMap.has(node.content))
    {
        returnString=`${returnString}${node.content}`;
    };
    intersectionMap.set(node.content);
    if(node.children.left)
    {
        __treeIntersection(node.children.right)
    }
    if(node.children.right)
    {
        __treeIntersection(node.children.right)
    }
}