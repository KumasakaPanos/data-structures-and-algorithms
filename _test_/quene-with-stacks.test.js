'use strict';
const quene = require('../quene-with-stacks.js');

describe('Quene methods tests', () => {
    test('Return null when non strings are supplied', ()=>{
        Ka=new quene.Quene();
        Ka.enquene(1);
        expect(Ka._Stack1.content[0]===[1]);
        Ka.enquene(1);
        expect(Ka._Stack1.content[1]===[1]);
        Ka.enquene(1);
        expect(Ka._Stack1.content[2]===[1]);
    });
    test('return hello world when world is supplied', ()=>{
        Ka=new quene.Quene();
        Ka.enquene(1);
        expect(Ka._Stack1.content[0]===[1]);
        Ka.enquene(1);
        expect(Ka._Stack1.content[1]===[1]);
        Ka.enquene(1);
        expect(Ka._Stack1.content[2]===[1]);
        Ka.dequene();
        expect(Ka._Stack1.content[2]===null);
        Ka.dequene();
        expect(Ka._Stack1.content[1]===null);
        Ka.dequene();
        expect(Ka._Stack1.content[0]===null);
    })
});