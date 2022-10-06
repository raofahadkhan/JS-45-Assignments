let guestList = ["Amaan", "Wajid", "Adnan"];

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}

console.log("Hey guys I have order a bigger dinning table");

// Adding a Guest at the start of an array
guestList.unshift("Nashit");

//Adding a Guest at the End of an array
guestList.push("Asim");

//Adding a Guest at the Mid of an array
guestList.splice(1, 0, "Shariq");

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}
