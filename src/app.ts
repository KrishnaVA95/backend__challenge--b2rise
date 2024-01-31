import "reflect-metadata"
import 'express-async-errors'
import express from 'express'
import { userRoutes } from "./routes/users.routes"

const app = express()

app.use(express.json())
app.use('/users', userRoutes)

app.get('/', (req, res) => {return res.json("hello world")})

export default app