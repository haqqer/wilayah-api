const express = require('express')
const app = express()

const Wilayah = require('./controllers/wilayah')

app.get('/', (req, res) => {
    res.send({'status':'ok'})
})

app.get('/provinsi', Wilayah.getProvinsiFilter)
app.get('/kabupaten', Wilayah.getKabupaten)
app.get('/kecamatan', Wilayah.getKecamatan)

app.listen(3000, () => console.log('App is run ....'))

