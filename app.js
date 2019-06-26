const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('morgan');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const db = require('./db');

const port = process.env.PORT || 3000;

const Wilayah = require('./controllers/wilayah')
const api = require('./api');

app.get('/', (req, res) => {
    res.send({'status':'ok'})
})
// console.log(db);
app.use('/api',api);
// app.get('/wilayah', Wilayah.getAll)
// app.get('/provinsi', Wilayah.getProvinsi)
// app.get('/kabupaten', Wilayah.getKabupaten)
// app.get('/kecamatan', Wilayah.getKecamatan)
// app.get('/desa', Wilayah.getDesa)

app.listen(port, console.log(`App run in port ${port} ...`))

