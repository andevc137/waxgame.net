const express = require('express')
const axios = require('./axios')

const router = express.Router()

const fs = require('fs')
const path = require('path')

const base_api = 'https://wax.api.atomicassets.io'

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

router.get('/:id', async (req, res) => {
    let assetid = req.params.id
    let jsonpath = path.join(__dirname, `../data/${assetid}.json`)

    if (fs.existsSync(jsonpath)) {
        const json = require(`../data/${assetid}.json`)
        return res.status(200).send(json)
    }

    const url = `${base_api}/atomicassets/v1/assets/${assetid}`
    const mockIp = `${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}.${getRandom(1,255)}`

    await axios.post(url,
    {
        headers: {
            'X-Forwarded-For': mockIp
        },
        timeout: 15000
    })
    .then((resp) => {
        if(resp.data) {
            //console.log(resp)
            fs.writeFileSync(jsonpath, JSON.stringify(resp.data))
            return res.status(200).send(resp.data)
        }
    })
    .catch((err) => {
        return res.status(500).send(JSON.stringify(err))
    })
})

module.exports = router;
