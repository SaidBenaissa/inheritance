function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;

    this.getFullName = function( ) {
        return this.firstName + " " + this.lastName;
    }
}

function Hero(fName, lName) {
    // this = {}
    Person.call(this, fName, lName);
    this.isHero = true;
}

Hero.prototype.fightCrime = function() {
    console.log('I am fighting crime');
}

Hero.prototype = Object.create(Person.prototype); // Object.create() creates a new object with the specified prototype object and properties.

let batman = new Hero('Bruce', 'Wayne');
console.log(batman.getFullName()); // Bruce Wayne
