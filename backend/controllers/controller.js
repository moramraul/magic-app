const mtg = require('mtgsdk')

function pruebaRouter(req, res) {
    console.log('Prueba')
    res.send({ message: "El router funciona" })
}

async function sendingMagic(req, res) {
    const result = await mtg.card.find(3);
    console.log(result)
    res.send(result.card)
}

const control = {
    pruebaRouter: (req, res) => { pruebaRouter(req, res) },
    sendingMagic: (req, res) => { sendingMagic(req, res) },
}

module.exports = control;