// Person class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class definition (inherits from Person)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the parent class (Person) constructor
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example Test Case 1: Person instance
const person1 = new Person('Alice', 25);
person1.greet(); // Expected output: "Hello, my name is Alice, I am 25 years old."

// Example Test Case 2: Employee instance
const employee1 = new Employee('Bob', 30, 'Manager');
employee1.jobGreet(); // Expected output: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."
