# Reverse an Array
Given an array, reverse the index orders of the values

## Challenge
Given an array, reverse the index orders of the values

![alt text](https://raw.githubusercontent.com/spinaltaper/data-structures-and-algorithms/reverseArray/assets/reverseArray.jpg)

## Solution
<!-- Embedded whiteboard image -->
'use strict'
function reverseArray (input) {
    let temp=0;
    for(var i=0;i<input.length;i++)
    {
        temp=input[i];
        input[i]=input[input.length-(i+1)];
        input[input.length-(i+1)]=temp;
    }
    return input;
}

## Task List
- [x] Whiteboarding done
- [x] Solution coded
- [x] Solution submitted
- [x] Readme created
