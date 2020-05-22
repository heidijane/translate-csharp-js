function main() {
  // Put your code here
  const allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyRequired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyRequired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyRequired: 12.2
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyRequired: 100.0
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyRequired: 2921.5
    }
  ]

  const MakeEvilSpellBook = (spells) => {
    return {
      Title: "Evil Book",
      Spells: spells.filter(spell => spell.IsEvil)
    }
  }

  const MakeGoodSpellBook = (spells) => {
    return {
      Title: "Good Book",
      Spells: spells.filter(spell => !spell.IsEvil)
    }
  }

  const DisplaySpellBook = (book) => {
    console.log(book.Title);
    for (spell of book.Spells) {
      console.log(spell.Name);
    }
  }

  console.log("Do you believe in magic?");
  console.log("------------------------");

  const goodBook = MakeGoodSpellBook(allSpells);
  const evilBook = MakeEvilSpellBook(allSpells);

  DisplaySpellBook(goodBook);
  console.log("");
  DisplaySpellBook(evilBook);

}

main();