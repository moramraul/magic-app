
const cors = require('cors');
const express = require('express');
const mtg = require('mtgsdk')
const router = require('./routes/router')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)

const PORT = process.env.PORT || 3000;

// async function getCards() {
//     const result = await mtg.card.find(5);
//     return result;
// }

// const card = getCards()
// console.log(card);

app.get('/api', (_req, res) => {
  res.status(200).json({message: "Hola, soy api"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});