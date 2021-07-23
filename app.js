const express = require('express')
const cors = require('cors')
const get_account = require('./api/get_account')
const get_tlm = require('./api/get_tlm')
const get_tag = require('./api/get_tag')
const get_lastmine = require('./api/get_lastmine')
const get_tx = require('./api/get_tx')
const check_nft = require('./api/check_nft')
const get_table_rows = require('./api/get_table_rows')
const atomicassets = require('./api/atomicassets')
const get_tools = require('./api/get_tools')

const app = express()
const port = 80

const path = require('path')

app.use(cors())
app.use('/api/get_account', get_account)
app.use('/api/get_tlm', get_tlm)
app.use('/api/get_tag', get_tag)
app.use('/api/get_lastmine', get_lastmine)
app.use('/api/get_tx', get_tx)
app.use('/api/get_table_rows', get_table_rows)
app.use('/api/atomicassets', atomicassets)
app.use('/api/get_tools', get_tools)

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(process.argv[2] || process.env.PORT || port, () => {
    console.log(`App is listening at ${process.argv[2] || process.env.PORT || port}`);
});
