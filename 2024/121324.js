// Fun with ES6 Classes #2 - Animals and Inheritance - 7kyu
/*Preloaded for you in this Kata is a class Animal
 * Task: Define the following classes that inherit from Animal:
 * 	Shark
 * 	Cat
 * 	Dog
*/

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  // On your own now - you can do it :D
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}
