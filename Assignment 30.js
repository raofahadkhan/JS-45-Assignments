let users = ["admin", "fahad", "asim", "nashit", "hassan"];

let greet = users.map((user) => {
  if (user == "admin") {
    console.log("Hello Admin ? Would you like to see some status report");
  } else if (user == "fahad") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "asim") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "asim") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "nashit") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "hassan") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else {
    console.log("we need to find some users");
  }
});
