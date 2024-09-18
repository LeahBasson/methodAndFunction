class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person1 = new Person ('Leah', 'Basson')
//Method - it needs to be accessed via an object
console.log(person1.fullName()); 

function addition(numb1, numb2) {
    console.log(numb1 + numb2);
}
addition(7, 3)

//Difference: method needs to make use of an object but a function can be called.