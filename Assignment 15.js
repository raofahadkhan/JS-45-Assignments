let guestList = ["Amaan", "Wajid", "Adnan"];

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}
// the array.splice() function updates the current array and returns the deleted member in sickGuest variable in array
sickGuest = guestList.splice(2, 1, "Hassan");
console.log(
  `Hey guys unfortunately ${sickGuest} Bhai is Sick today, He can't Join us today`
);
console.log("Inviting friends Again");

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}
