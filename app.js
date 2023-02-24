console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(rmHobby) {
        let foundIndx = this.hobbies.indexOf(rmHobby);
        this.hobbies.splice(foundIndx, 1);
    }

    greeting() {
        console.log(`Hello ${this.name}!`);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n")

class Coder extends Person {
    constructor (name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);

        this.occupation = "Full Stack Web Developer";
    }

    greeting () {
        console.log(`Hey! My name is ${this.name} and I'm a ${this.occupation}!`);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let Catriece = new Person("Catriece", 0, "Florida", "Singing and Songwriting");
let Jerry = new Coder("Jerry", 0, "Florida", "Gaming");

console.log(Catriece);
console.log(Jerry);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    result = 0;

    add (x, y) {
        let res;
        if (y == undefined) {
            res = this.result + x;
        } else {
          res = x + y;
        }
        this.result = res;
        return this.result;
    }

    subtract(x, y){
        let res;
        if (y == undefined) {
            res = this.result - x;
        } else {
          res = x - y;
        }
        this.result = res;
        return this.result;
    }

    multiply(x, y){
        let res;
        if (y == undefined) {
            res = this.result * x;
        } else {
          res = x * y; 
        }
        this.result = res;
        return this.result;
    }

    divide(x, y){
        let res;
        if (y == undefined) {
            res = this.result / x;
        } else {
          res = x/y;
        }
        this.result = res;
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
}

let calc = new Calculator();
calc.add(1)
calc.displayResult()
calc.subtract(4231, 231)
calc.displayResult()
calc.multiply(23,5)
calc.displayResult()
calc.divide(4230,5)
calc.displayResult()