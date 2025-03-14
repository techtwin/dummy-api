import express, { Router } from 'express'
import bidController from "./bid";
import healthController from "./health";

const app = Router()

if (process.env.APP_ENV !== production) {
    app.use(`/public`, express.static('public'))
}

app.use(`/health`, healthController)
app.use(`/bid`, bidController)

export default app