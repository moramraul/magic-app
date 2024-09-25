import fetch from "node-fetch";


function pruebaRouter(req, res) {
  console.log("Prueba");
  res.send({ message: "El router funciona" });
}

function writeMagicData(card) {

  let {id, name, image_uris, type_line, oracle_text, colors, legalities, set, rarity} = card
  if (!image_uris) image_uris = []
  if (!id) id = Math.random()
  if (!name) name = ''
  if (!type_line) type_line = '';
  if (!oracle_text) oracle_text = '';
  if (!colors) colors = [];
  if (!legalities) legalities = [];
  if (!set) set = '';
  if (!rarity) rarity = '';
}

async function sendingMagic(req, res) {
const {colors, format } = req.body;
const colorsString = colors.join("")


const resultSorcery = await fetch(`https://api.scryfall.com/cards/search?&q=type%3Asorcery+color<%3D${colorsString}+%28game%3Apaper%29+legal%3A${format}`)
const resultInstant = await fetch(`https://api.scryfall.com/cards/search?&q=type%3Ainstant+color<%3D${colorsString}+%28game%3Apaper%29+legal%3A${format}`)
const resultCreature = await fetch(`https://api.scryfall.com/cards/search?&q=type%3Acreature+color<%3D${colorsString}+%28game%3Apaper%29+legal%3A${format}`)
 const dataSorcery = await resultSorcery.json();
 const dataInstant = await resultInstant.json();
 const dataCreatures = await resultCreature.json();
 const allCards = [dataSorcery.data, dataInstant.data, dataCreatures.data]
 const allTogether = allCards.flat()
 res.send(allTogether);

  // const result = await fetch(
  //   "https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3"
  // );
  // const data = await result.json();
  // const cards = data.data;
  // console.log(cards.length)
  // for (let j = 0; j < cards.length; j++) {
  //   console.log('itero cards')
  //   writeMagicData(cards[j])
  // }

  // const fiveCards = [];
  // for (let i = 0; i < data.data.length; i++) {
  //   if (i > 4) break;
  //   else fiveCards.push(data.data[i])
  // }
  // res.send(fiveCards);
}

async function magicRequest(req, res) {
  const data = req.body;
  console.log(data);
  res.sendStatus(200);
}

const control = {
  pruebaRouter: (req, res) => {
    pruebaRouter(req, res);
  },
  sendingMagic: (req, res) => {
    sendingMagic(req, res);
  },
  magicRequest: (req, res) => {
    magicRequest(req, res);
  },
};

export default control;
