const express = require('express')
const path = require('path')
const app = express()

//setup static assets and middleware
app.use(express.static('./public')) // express.static is a built-in middleware


//No need.. All static
// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, 'navbar-app', 'index.html'))
// })


app.get('*', (req, res) => {
    res.status(404).send('Not Found')
})



app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})