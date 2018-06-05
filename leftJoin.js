module.exports = function rightJoin(map1,map2){
    let iterator = map1.keys()//.Entries.forEach(item=>(map1.set(item,map2.get(item))))
    let key = iterator.next().value;
    while(key !== undefined)
    {
        if(map2.get(key)){
        for(let i = 0; i<map2.get(key).length;i++){
            map1.get(key).push(map2.get(key)[i]);
        }
        }
        console.log(map1.get(key))
        key = iterator.next().value;
    }
}