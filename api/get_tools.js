const express = require('express')
const axios = require('./axios')

const router = express.Router()

const fs = require('fs')
const path = require('path')

const base_api = 'https://wax.api.atomicassets.io'

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

router.get('/:account', async (req, res) => {
    let account = req.params.account
    // account = account.match(/^[a-z0-9.]{4,5}(?:.wam)/gm)
    // if(!account || typeof account == "undefined" || account == '') return res.status(400).send({msg: "Invalid Account."})
    // account = account[0]

    const url = `${base_api}/atomicassets/v1/assets?owner=${account}&page=1&limit=1000&order=desc&sort=asset_id`
    const mockIp = `${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}`

    let schemaName = 'tool.worlds'
    let limit = 3
    let isSlice = true

    if (req.query.hasOwnProperty('schema_name')) schemaName = req.query['schema_name']
    if (req.query.hasOwnProperty('no_slice')) isSlice = false
    if (req.query.hasOwnProperty('limit')) limit = Number(limit)

    await axios.get(url,
    {
        headers: { 
            'authority': 'wax.api.atomicassets.io', 
            'pragma': 'no-cache', 
            'cache-control': 'no-cache', 
            'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"', 
            'sec-ch-ua-mobile': '?0', 
            //'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36', 
            'sec-ch-ua-platform': '"Windows"', 
            'accept': '*/*', 
            'origin': 'https://wax.bloks.io', 
            'sec-fetch-site': 'cross-site', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-dest': 'empty', 
            'referer': 'https://wax.bloks.io/', 
            'accept-language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,es-US;q=0.6,es;q=0.5,fr-FR;q=0.4,fr;q=0.3,mt;q=0.2',
            'X-Forwarded-For': mockIp
        },
        timeout: 15000
    })
    .then((resp) => {
        if(resp.data) {
            let data = resp.data.data.filter(r => r.schema.schema_name === schemaName)
            data.sort((a,b) => Number(b.data.ease) - Number(a.data.ease))
            if (isSlice)
                data = data.slice(0, limit)
            return res.status(200).send(data.map(r => r.asset_id))
        }
    })
    .catch((err) => {
        return res.status(500).send(JSON.stringify(err))
    })
})

module.exports = router;
