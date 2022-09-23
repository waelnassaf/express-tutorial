const express = require('express')
const app = express()

const {products} = require('../data')

app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params
    const singleProduct = products.find(product => product.id === Number(productID))
    if (!singleProduct)
        return res.status(404).send(`Product doesn't exists`)
    res.json(singleProduct)
})

//Just for example..
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})


app.get('/api/v1/q', (req, res) => {
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter(prod => {
            return prod.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length === 0) {
        // return res.status(200).send('Sorry no results found')
        //You have to explicitly return.
        return res.status(200).json({success: true, data: []}) //Only one response must be sent!
    }
    res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})

