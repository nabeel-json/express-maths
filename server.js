const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/average', (req, res) => {
    res.render('average')
})

app.get('/percentage', (req, res) => {
    res.render('percentage')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
