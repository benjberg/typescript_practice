export {}
let message = 'welcome back'
console.log(message)
// variable declaration and types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Ben';

let sentance: string = `my name is ${name} 
I am a beginner in Typescript `

console.log(sentance)

let n: null = null;
let u: undefined = undefined 
// array types
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]
// tuple 
let person1: [string, number] = ['chris', 23]
// Enum allows us to store collections and index them at whatever point we want
enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c)
// type any allows us to assign a variable to any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Ben';
// Unknown works similarly but wont allow us to assign any method instead needing to specify (myVar as String etc)
let myVariable: unknown = 10

function hasName(obj: any): obj is {name: string} {
    return !!obj && typeof obj === 'object' && 'name' in obj
}
if (hasName(myVariable)) {
    console.log(myVariable.name)
}
;

// (myVariable as string).toUpperCase();

// Type inference 
let a;
a = 10;
a = true;
// TS infers b is a number and cant be assigned a boolean
let b = 20;
b = true

// Assinging multiple types (union types) benifits of using unio types over any or unknown is telesense, methods will be available through union but not any or uk

let multi: number | boolean;
multi = 20;
multi = true; 

// functions when written can have the parameters defined as well as the output, optional parameters can be used by following the param name with a question mark, all optional params must be entered AFTER required ones you can set them to a default value by assigning your params with a = sign
function add(num1: number, num2: number = 10) : number {
    if (num2)
    return num1 + num2;
    else
    return num1
}
add(10)
// interfaces are used to simplify objects, an optional property can be added by adding a ? to the end of the key
interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'bruce',
    lastName: 'wayne'
}

fullName(p)

// classes

class Employee {
    empolyeeName :string;

    constructor(name: string){
        this.empolyeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.empolyeeName}`)
    }
}

let emp1 = new Employee('Ben');
console.log(emp1.empolyeeName);
emp1.greet()

class Manager extends Employee {
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
        console.log('manager delegating task')
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet
console.log(m1.empolyeeName)