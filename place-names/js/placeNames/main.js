function main() {

  const names = [
    "Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China"
  ];

  console.log("All Place Names");

  for (name of names) {
    console.log(name);
  }

  console.log("");

  const theNames = names.filter(name => name.startsWith("The"))

  console.log("'The' Place Names");
  for (name of theNames) {
    console.log(name);
  }


}

main();