import 'dotenv/config'
import tracer from "dd-trace";
tracer.init({ env: process.env.DD_ENV, service: process.env.DD_SERVICE })
tracer.use('express')
import express from 'express'
import bidApp from './app'

const PORT = process.env.PORT || 3039

try {
    const app = express()
    // process.env.NODE_ENV === 'local'
    app.use(express.json())

    app.use(bidApp)
    app.listen(PORT, () => {
        console.log(`Server is now listening on port ${PORT}`)
    })
} catch (err) {
    console.log('Initializing the app threw an error', err.message)
}