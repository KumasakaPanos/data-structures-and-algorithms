'use strict';
const subjectFile = require('../two-quene-object.js');


describe('quene tests', () => {
    test('Testing enquene dogs', ()=>{
        let Shelter= new subjectFile.AnimalShelter();
        Shelter.enquene('dog');
        expect(Shelter.dogs.content[0]);
    });
    test('Testing enquene cats', ()=>{
        let Shelter=new subjectFile.AnimalShelter();
        Shelter.enquene('cat');
        expect(Shelter.cats.content[0])
    })
    test('Testing dequene dog',()=>{
        let Shelter= new Quene();
        Shelter.enquene('dog');
        Shelter.dequene('dog');
        expect(Shelter.content[0]===1);
    })
    test('Testing dequene cat',()=>{
        let Shelter= new Quene();
        Shelter.enquene('cat');
        Shelter.dequene('cat');
        expect(Shelter.content[0]===1);
    })
});
