
// Basic Types
let id: number = 5;
let company: string = 'code tamizha';
let isCompanyOpen: boolean = true; 
let x:any;
let ids: number[] = [1,2,3,4,5]
let x1: any[] = [1,'d',true]

// Tuple
let employee: [number, string, boolean]=[1, 'Iyyappan', true]
let employees: [number, string, boolean] [] = [
    [1, 'Suresh', true],
    [2, 'Maran', true],
    [3, 'Aso' , true],
]

//union
let eid: string | number | boolean;

eid = 5
eid = 'roll1'
eid = true

//enum
enum direction1 {
    up,
    down,
    left,
    right
}
enum direction2 {
    up='up',
    down='down',
    left='left to',
    right='right'
}

console.log(direction2.left)

//object

type userType = {
    id: number,
    name: string
}

let user: userType = {
    id: 1,
    name: 'Suresh'
}

//type assert
let x3: any = 5
// let compId = x3 as number;
let compId = <number>x3;

//fuction
function doMath(a:number,b:number): number{
    return a+b
}

console.log(doMath(1,2))

function logme(x: string | number): void{
    if(typeof x === 'number') console.log('hi suresh')
    if(typeof x === 'string') console.log('Hi maran')
}
logme('h')

//interface
interface userType1  {
    id: number,
    name: string
    age?: number
}

let user1: userType1 = {
    id: 1,
    name: 'Suresh'
}

interface MathFunc{
    (x: number , y:number):number
}
const add: MathFunc = (x:number, y: number)=> x+y
const sub: MathFunc = (x:number, y: number)=> x-y


interface personType  {
    id: number,
    name: string,
    register(): string
}
class Person implements personType {
    id:number
    name:string

    constructor(id:number, name:string)
    {
        this.id=id
        this.name=name
    }
    register(){
        return `${this.name} is registered now`
    }
}
const iyy=new Person(1,'maran')
const iyy1 = new Person(2,'Code')
const iyy2  = new Person(3,'Tmaizh')

//console.log(iyy,iyy1,iyy2)
//console.log(iyy.register())

class Employee extends Person{
    position: string

    constructor(id:number , name:string, position: string){
        super(id,name)
        this.position=position
    }
}

const emp1 = new Employee(5, 'Ramesh','Developer')   // class extends methods

console.log(emp1.register())

//Generics
function getArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let srrArray = getArray<string>(['a','s'])

numArray.push(123)

