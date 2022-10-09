function make_sandwich(...items) {
  items.map((item) => {
    console.log(`Adding ${item} to your Sandwich`);
  });
  console.log("Your Sandwich is Ready");
}

make_sandwich("roast beef", "cheddar cheese", "lettuce", "honey dijon");
make_sandwich("turkey", "apple slices", "honey mustard");
make_sandwich("peanut butter", "strawberry jam");
