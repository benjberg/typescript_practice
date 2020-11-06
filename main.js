"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
// variable declaration and types
var isBeginner = true;
var total = 0;
var name = 'Ben';
var sentance = "my name is " + name + " \nI am a beginner in Typescript ";
console.log(sentance);
var n = null;
var u = undefined;
// array types
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple 
var person1 = ['chris', 23];
// Enum allows us to store collections and index them at whatever point we want
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// type any allows us to assign a variable to any type
var randomValue = 10;
randomValue = true;
randomValue = 'Ben';
// Unknown works similarly but wont allow us to assign any method instead needing to specify (myVar as String etc)
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
;
// (myVariable as string).toUpperCase();
// Type inference 
var a;
a = 10;
a = true;
// TS infers b is a number and cant be assigned a boolean
var b = 20;
b = true;
// Assinging multiple types (union types) benifits of using unio types over any or unknown is telesense, methods will be available through union but not any or uk
var multi;
multi = 20;
multi = true;
// functions when written can have the parameters defined as well as the output, optional parameters can be used by following the param name with a question mark, all optional params must be entered AFTER required ones you can set them to a default value by assigning your params with a = sign
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(10);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'bruce',
    lastName: 'wayne'
};
fullName(p);
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empolyeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.empolyeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Ben');
console.log(emp1.empolyeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('manager delegating task');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet;
console.log(m1.empolyeeName);
