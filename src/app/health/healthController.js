import express from "express";

const healthController = express.Router()

healthController.all('/', (req, res) => {
    res.send('OK')
})

export default healthController