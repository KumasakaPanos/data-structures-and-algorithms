const findMatches = module.exports={};
findMatches.find_all_matches = function(tree,value)
{
    let matchesArray=[];
    console.log(tree);
    this.__find_all_matches(tree.head,value,matchesArray)
    return(matchesArray);
}

findMatches.__find_all_matches = function(node,value,matchesArray)
{
    if(node.value===value)
    {
        matchesArray.push(node)
    }
    if(node.children)
    {
        node.children.forEach(element => {
            this.__find_all_matches(element,value,matchesArray);   
        });
    }
}