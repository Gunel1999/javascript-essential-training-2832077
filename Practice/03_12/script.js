/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    waterVolume
  ) {
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    this.waterVolume = waterVolume;
  }
  checkWaterVolume() {
    if (this.waterVolume > 0) {
      console.log(`You have ${this.waterVolume} liters of water left.`);
    } else {
      console.log("Time to refill");
    }
  }
}

const MyHikingBackpack = new HikingBackpack(
  "Asus-pack",
  20,
  "black",
  5,
  27,
  27,
  false,
  10
);

console.log(MyHikingBackpack);
