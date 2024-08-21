/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Husband = {
  name: "Dmitry",
  birthYear: 1988,
  nationality: "russian",
  placeOfBirth: "Baku, Azerbaijan",
  canCook: true,
  hasSiblings: false,
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

console.log(
  `My husband's name is ${
    Husband.name
  }. He is ${Husband.calcAge()} years old. He is ${
    Husband.nationality
  }. He was born in ${Husband.placeOfBirth}. He ${
    Husband.hasSiblings ? "has some" : "doesn't have any"
  } brothers or sisters. He ${Husband.canCook ? "can" : "can't"} cook`
);
