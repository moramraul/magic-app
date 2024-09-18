import fetch from "node-fetch";
const firebaseUrl = 'https://magic-app-react-default-rtdb.europe-west1.firebasedatabase.app';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFqGrsqks3oGtqlP4bYKqsK1x9Nxhh_ro",
  authDomain: "magic-app-react.firebaseapp.com",
  databaseURL: "https://magic-app-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "magic-app-react",
  storageBucket: "magic-app-react.appspot.com",
  messagingSenderId: "820347346082",
  appId: "1:820347346082:web:01b9d5a190804a98dd0bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const setF = set;

function pruebaRouter(req, res) {
  console.log("Prueba");
  res.send({ message: "El router funciona" });
}

// set(ref(db, '/magic' + 1), {
//   name: 'Perro',
//   colors: ["W", "U"]
// })
function writeMagicData(card) {

  let {id, name, image_uris, type_line, oracle_text, colors, legalities, set, rarity} = card
  if (!image_uris) {
    image_uris = []
  }
  if (!id) {
    id = Math.random()
  }
  if (!name) {
    name = ''
  }
  if (!type_line) type_line = '';
  if (!oracle_text) oracle_text = '';
  if (!colors) colors = [];
  if (!legalities) legalities = [];
  if (!set) set = '';
  if (!rarity) rarity = '';
  setF(ref(db, 'magic/' + id), {
      name,
      image_uris,
      type_line,
      oracle_text,
      colors,
      legalities,
      set,
      rarity
    });
}

async function sendingMagic(req, res) {
const dbRef = ref(getDatabase());
get(child(dbRef, `magic/`)).then((snapshot) => {
  if (snapshot.exists()) {
    let arrayCards = []
    const objectCard = snapshot.val();
    let keys = Object.keys(objectCard)
    for (let i = 0; i < keys.length; i++) {
      arrayCards.push(objectCard[keys[i]])
    }
    let fiveCards = arrayCards.slice(0, 6)
    res.send(fiveCards);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

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
