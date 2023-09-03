console.log("data types if js");

// there are two types of datatypes in js 
// 1. Primitive 
// 2. Non -primitive 

// Primitive are :- Number, null, boolean, string, bigint, symbole, undefined 
// Non- primitive:- Objects 

let n = 10;
let n2 = null;
let s = "string";
let s2 = Symbol("my symbole");
let b = true;
let b2 = BigInt("100");
let u;

// console.log(n, n2, s, s2, b, b2, u);

// objects  non primitive

let myObj = {
    "name" : "aman",
    "roll" : 108,
    "stream" : 'computer science'
}

console.log(myObj['name']);