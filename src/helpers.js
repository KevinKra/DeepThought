export function getFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//*.) default state
//-- this.answer hidden
//-- GOT IT | MORE PRACTICE buttons disabled

//1.) on SUBMIT show current card's answer
//-- onSumbit() display this.answer
//-- GOT IT | MORE PRACTICE buttons enabled

//2.) on GOT IT remove the card from the stack
//-- this.understood = true
//-- stack.splice() | remove this card
//^^^^^ dont destroy the struct, perhaps dont display cards with understood = true;
//-- display random next card
//-- return to default

//3.) on MORE PRACTICE set flag to true
//-- this.flagged = true
//-- this.understood = false
//-- return to default

//store in localStorage
