const express = require('express')
const axios = require('./axios')

const router = express.Router()

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

router.get('/:account', async (req, res) => {
    let account = req.params.account

    const mockIp = `${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}`

    const config = {
        method: 'get',
        url: 'https://lightapi.eosamsterdam.net/api/balances/wax/' + account,
        headers: { 
            'authority': 'lightapi.eosamsterdam.net', 
            'pragma': 'no-cache', 
            'cache-control': 'no-cache', 
            'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"', 
            'sec-ch-ua-mobile': '?0', 
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36', 
            'accept': '*/*', 
            'origin': 'https://wax.bloks.io', 
            'sec-fetch-site': 'cross-site', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-dest': 'empty', 
            'referer': 'https://wax.bloks.io/', 
            'accept-language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,es-US;q=0.6,es;q=0.5,fr-FR;q=0.4,fr;q=0.3,mt;q=0.2',
            'X-Forwarded-For': mockIp
        }
    };

    await axios(config)
        .then((resp) => {
            if(resp.data) {
                return res.status(200).send(resp.data)
            }
        })
        .catch((err) => {
            return res.status(500).send(JSON.stringify(err))
        })
})

module.exports = router;
