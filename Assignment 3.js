const fname = "Rao Fahad khAn";

// name in lower case
console.log(fname.toLowerCase());

// name in upper case
console.log(fname.toUpperCase());

// name in title case

function titleCase(fname) {
  let name = fname.toLowerCase().split(" ");

  for (let i = 0; i < name.length; i++) {
    name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    return name.join(" ");
  }
}

console.log(titleCase(fname));
