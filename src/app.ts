import "reflect-metadata"
import 'express-async-errors'
import express from 'express'
import { userRoutes } from "./routes/users.routes"
import { productsRoutes } from "./routes/products.routes"
import { handleAppError } from "./middlewares/handleAppError.middlewares"

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/products', productsRoutes)
app.use(handleAppError)

export default app