import "reflect-metadata"
import 'express-async-errors'
import express from 'express'
import { userRoutes } from "./routes/users.routes"
import { productsRoutes } from "./routes/products.routes"

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/products', productsRoutes)

app.get('/', (req, res) => {return res.json("hello world")})

export default app