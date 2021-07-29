const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    const lands = require('../data/lands.json')
    const filter = {
        'charge': 0,
        'mining': 0,
        'nft': 0,
        'pow': 0,
        'commission': 2500
    }

    const payload = Object.assign({}, filter)

    for(const i of ['nft', 'charge', 'mining', 'pow', 'commission']) {
        if (req.query.hasOwnProperty(i)) {
            payload[i] = req.query[i]
        }
    }

    return res.status(200).send(
        lands.filter(r => r.charge >= payload.charge &&
            r.nft >= payload.nft &&
            r.mining >= payload.mining &&
            r.pow >= payload.pow &&
            r.commission <= payload.commission / 100
        )
    )
})

module.exports = router;
