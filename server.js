const express = require('express')
const server = express()
const port = process.env.PORT || 3039

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.get('/health', (req, res) => {
    res.send('OK')
})

module.exports = server