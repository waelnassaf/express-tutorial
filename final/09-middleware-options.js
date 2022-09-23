const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})