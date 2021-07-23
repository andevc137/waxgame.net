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
    account = account.match(/^[a-z0-9.]{4,5}(?:.wam)/gm)
    if(!account || typeof account == "undefined" || account == '') return res.status(400).send({msg: "Invalid Account."})
    account = account[0]

    const url = `${base_api}/atomicassets/v1/assets?owner=${account}&page=1&limit=1000&order=desc&sort=asset_id`
    const mockIp = `${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}`

    await axios.get(url,
    {
        headers: {
            'X-Forwarded-For': mockIp
        },
        timeout: 15000
    })
    .then((resp) => {
        if(resp.data) {
            let data = resp.data.data.filter(r => r.schema.schema_name === "tool.worlds")
            data.sort((a,b) => Number(b.data.ease) - Number(a.data.ease))
            data = data.slice(0, 3)
            return res.status(200).send(data.map(r => r.asset_id))
        }
    })
    .catch((err) => {
        return res.status(500).send(JSON.stringify(err))
    })
})

module.exports = router;
