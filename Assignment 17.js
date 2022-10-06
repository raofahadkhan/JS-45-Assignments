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

console.log(
  "Hey guys I just figured out that my dinning will not arrive on time I can only invite 2 guests"
);

for (let i = -1; i < guestList.length; i++) {
  let uninvitedGuest = guestList.pop();
  console.log(
    `Sorry ${uninvitedGuest}, friend you are not invited only have a capacity of 2`
  );
}

for (let i = 0; i < guestList.length; i++) {
  console.log(`You are still invited ${guestList[i]}`);
}

for (let i = guestList.length; i > 0; i--) {
  guestList.pop();
}
console.log(guestList);
