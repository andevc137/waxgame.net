const express = require('express')
const axios = require('./axios')

const router = express.Router()

const base_api = [
    'https://wax.pink.gg',
    'https://wax.cryptolions.io',
    'https://wax.dapplica.io',
    // 'https://api.wax.liquidstudios.io',
    'https://wax.eosn.io',
    'https://api.wax.alohaeos.com',
    'https://wax.greymass.com',
    'https://wax-bp.wizardsguild.one',
    // 'https://apiwax.3dkrender.com',
    'https://wax.eu.eosamsterdam.net',
    // 'https://wax.csx.io',
    'https://wax.eoseoul.io',
    'https://wax.eosphere.io',
    'https://api.waxeastern.cn'
]

const filter = {
    json: true
}

const params = [
    'code',
    'scope',
    'table',
    'lower_bound',
    'upper_bound',
    'reverse',
    'limit',
    'key_type',
    'index_position',
    'table_key',
    'json',
    'show_payer'
]

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

router.post('/', async (req, res) => {
    let index = getRandom(0, base_api.length)
    const url = `${base_api[index]}/v1/chain/get_table_rows`
    const mockIp = `${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}`

    const payload = {}
    Object.assign(payload, filter)
    // copy data
    for(const i of params) {
        if (req.body.hasOwnProperty(i)) {
            payload[i] = req.body[i]
        }
    }

    await axios.post(
        url,
        payload,
        {
            headers: {
                'X-Forwarded-For': mockIp
            },
            timeout: 15000
        }
    ).then((resp) => {
        if(resp.data) {
            return res.status(200).send(resp.data)
        }
        else {
            res.status(500).send({'error_code': 500})
        }
    })
    .catch((err) => {
        return res.status(500).send(JSON.stringify(err))
    })
})

module.exports = router;
