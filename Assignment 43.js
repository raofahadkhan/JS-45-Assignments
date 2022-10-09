let magician_names = ["fahad", "hamza", "sami", "amaan"];

function show_magicians(magician_name) {
  for (let i = 0; i < magician_name.length; i++) {
    console.log(magician_name[i]);
  }
}

function make_great(magician_name) {
  let great_magicians = [];
  magician_name.map((mag_name) => {
    mag_name1 = mag_name + " The Great";
    great_magicians.push(mag_name1);
  });
  console.log(great_magicians);

  return magician_names;
}

show_magicians(magician_names);
make_great(magician_names);
console.log("Original Magicians");
console.log(magician_names);
