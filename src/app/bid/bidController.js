import express from 'express'

export default express.Router().post('/', (req, res) => {
    res.send({ message: 'Bid Controller' })
})