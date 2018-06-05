let leftJoin = require('../leftJoin');

let map1 = new Map();
let map2 = new Map();

map1.set('Hobbies', ['Weightlifting']);
map1.set('Jobs', ['Dishwashing']);
map2.set('Hobbies', ['Knitting']);
map2.set('Chores', ['Taking out the trash'])

leftJoin(map1,map2);
test('checking for merging of values',()=>{
expect(map1.get('Hobbies')).toEqual(['Weightlifting','Knitting'])
});