const express = require('express')
const app = express()
app.use(cors())

var port = process.env.PORT || 3000;

const Wilayah = require('./controllers/wilayah')

app.get('/', (req, res) => {
    res.send({'status':'ok'})
})

app.get('/wilayah', Wilayah.getAll)
app.get('/provinsi', Wilayah.getProvinsi)
app.get('/kabupaten', Wilayah.getKabupaten)
app.get('/kecamatan', Wilayah.getKecamatan)
app.get('/desa', Wilayah.getDesa)

app.listen(port, console.log(`App run in port ${port} ...`))

