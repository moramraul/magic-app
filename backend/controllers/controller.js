import fetch from 'node-fetch';

function pruebaRouter(req, res) {
    console.log('Prueba')
    res.send({ message: "El router funciona" })
}

async function sendingMagic(req, res) {
    const result = await fetch('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3')
    const data = await result.json();
    console.log(data)
    res.send(data) 
}

const control = {
    pruebaRouter: (req, res) => { pruebaRouter(req, res) },
    sendingMagic: (req, res) => { sendingMagic(req, res) },
}

export default control;