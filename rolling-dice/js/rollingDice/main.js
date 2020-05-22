function main() {

  //get a random integer between 1 and 6
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const Roll = () => {
    const dieValue = getRandomInt(1, 6);

    let dieString = "";

    switch (dieValue) {
      case 1:
        dieString = "\u2680";
        break;
      case 2:
        dieString = "\u2681";
        break;
      case 3:
        dieString = "\u2682";
        break;
      case 4:
        dieString = "\u2683";
        break;
      case 5:
        dieString = "\u2684";
        break;
      case 6:
        dieString = "\u2685";
        break;
    }

    return {
      dieValue: dieValue,
      die: dieString
    }

  }

  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");

  for (let i = 0; i < 10; i++) {
    const die1 = Roll();
    const die2 = Roll();

    let message = `${die1.die} + ${die2.die} == ${die1.dieValue + die2.dieValue}`;
    if (die1.dieValue === die2.dieValue) {
      message += " DOUBLES!";
    }

    console.log(message);
  }

}

main();