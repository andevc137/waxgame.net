const express = require('express')
const cors = require('cors')
const get_account = require('./api/get_account')
const get_tlm = require('./api/get_tlm')
const get_tag = require('./api/get_tag')
const get_lastmine = require('./api/get_lastmine')
const get_tx = require('./api/get_tx')
const check_nft = require('./api/check_nft')
const get_table_rows = require('./api/get_table_rows')
const get_table_rows_v2 = require('./api/get_table_rows_v2')
const atomicassets = require('./api/atomicassets')
const get_tools = require('./api/get_tools')
const atomichub_sales = require('./api/atomichub_sales')
const atomichub_sale_detail = require('./api/atomichub_sale_detail')
const get_balance = require('./api/get_balance')
const list_lands = require('./api/list_lands')

const app = express()
const port = 80

const bodyParser = require('body-parser')
const path = require('path')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/get_account', get_account)
app.use('/api/get_tlm', get_tlm)
app.use('/api/get_tag', get_tag)
app.use('/api/get_lastmine', get_lastmine)
app.use('/api/get_tx', get_tx)
app.use('/api/get_table_rows', get_table_rows)
app.use('/api/get_table_rows', get_table_rows_v2)
app.use('/api/atomicassets', atomicassets)
app.use('/api/get_tools', get_tools)
app.use('/api/atomichub_sales', atomichub_sales)
app.use('/api/atomichub_sale_detail', atomichub_sale_detail)
app.use('/api/get_balance', get_balance)
app.use('/api/lands', list_lands)

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(process.argv[2] || process.env.PORT || port, () => {
    console.log(`App is listening at ${process.argv[2] || process.env.PORT || port}`);
});
