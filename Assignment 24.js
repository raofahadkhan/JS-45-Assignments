let myName = "Fahad";
console.log(myName == "Fahad");

let complection = "Brown";
console.log(complection != "Brown");

let mySchool = "PrograMMeR SchOoL";
console.log(mySchool.toLowerCase() == "Programmer School");
console.log(mySchool.toLowerCase() == "Programmer School".toLowerCase());

let mySalary = 35000;
console.log(`Is my Salary > 20000?`);
console.log(mySalary > 20000);

let myAge = 24;
console.log(`Is myAge > 25?`);
console.log(myAge > 25);

let price = 200;
console.log(price < 200);

let noOfFans = 5;
console.log(noOfFans < 5);

let bikeModel = "2007";
console.log(`Is bikeModel <= 2000`);
console.log(bikeModel <= 2000);

let engine = 70;
console.log(`Is enginePower is >= 125`);
console.log(engine >= 125);

let age = 18;
let parentNationality = "Pakistani";
console.log(
  age == 18 && parentNationality == "Pakistani"
    ? "Process Nationality"
    : "You are not Adult"
);

let age1 = 17;
let parentNationality1 = "Pakistani";
console.log(
  age1 == 18 && parentNationality1 == "Pakistani"
    ? "Process Nationality"
    : "You are not allowed be a Pakistani NIC "
);

let age2 = 17;
let parentNationality2 = "Pakistani";
console.log(
  age2 == 16 || parentNationality2 == "American"
    ? "Process Nationality"
    : "You are not allowed be a Pakistani NIC "
);

let friends = ["Ashar", "Bilal", "Nashit"];
console.log(friends.includes("Ashar"));
console.log(friends.includes("Amaan"));
