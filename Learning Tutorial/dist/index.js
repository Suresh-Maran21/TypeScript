"use strict";
// Basic Types
let id = 5;
let company = 'code tamizha';
let isCompanyOpen = true;
let x;
let ids = [1, 2, 3, 4, 5];
let x1 = [1, 'd', true];
// Tuple
let employee = [1, 'Iyyappan', true];
let employees = [
    [1, 'Suresh', true],
    [2, 'Maran', true],
    [3, 'Aso', true],
];
//union
let eid;
eid = 5;
eid = 'roll1';
eid = true;
//enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left to";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
console.log(direction2.left);
let user = {
    id: 1,
    name: 'Suresh'
};
//type assert
let x3 = 5;
// let compId = x3 as number;
let compId = x3;
//fuction
function doMath(a, b) {
    return a + b;
}
console.log(doMath(1, 2));
function logme(x) {
    if (typeof x === 'number')
        console.log('hi suresh');
    if (typeof x === 'string')
        console.log('Hi maran');
}
logme('h');
let user1 = {
    id: 1,
    name: 'Suresh'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered now`;
    }
}
const iyy = new Person(1, 'maran');
const iyy1 = new Person(2, 'Code');
const iyy2 = new Person(3, 'Tmaizh');
//console.log(iyy,iyy1,iyy2)
//console.log(iyy.register())
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(5, 'Ramesh', 'Developer'); // class extends methods
console.log(emp1.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let srrArray = getArray(['a', 's']);
numArray.push(123);
