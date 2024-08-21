/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changePocketNums: function (newNum) {
    this.pocketNum = newNum;
  },
};

console.log("Initial name:", backpack.name);
backpack.changeName("Lenovo-pack");
console.log("New name:", backpack.name);
console.log("Initial color:", backpack.color);
backpack.changeColor("black");
console.log("New color:", backpack.color);
