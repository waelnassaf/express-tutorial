const authorize = (req, res, next) => {
    const {user} = req.query
    if (user === 'wael') {
        req.user = {name: "Wael", id: 3}
        next()
    } else {
        res.status(401).send('Unauthorized access.')
    }
}

module.exports = authorize

