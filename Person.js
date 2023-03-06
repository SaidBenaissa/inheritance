// Define a Person class with a constructor method that initializes the firstName and lastName properties,
// and a getFullName method that returns the full name
class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

// Define a Hero class that extends the Person class using the "extends" keyword
class Hero extends Person {
    constructor(fName, lName) {
        // Call the constructor of the parent class using the "super" method to initialize the firstName and lastName properties
        super(fName, lName);
        // Set the isHero property to true
        this.isHero = true;
    }
}

// Create a new instance of the Hero class with the firstName "Ben" and the lastName "Aissa"
let hero = new Hero("Ben", "Aissa");
// Call the getFullName method to print the full name of the hero
console.log(hero.getFullName()); // Ben Aissa
