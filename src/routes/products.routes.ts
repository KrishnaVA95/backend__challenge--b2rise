import { Router } from "express";
import { createProductController } from "../controllers/products.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { productSchemaRequest } from "../schema/products.schema";

const productsRoutes = Router()

productsRoutes.post('', 
ensureDataIsValid(productSchemaRequest),
createProductController)

export {productsRoutes}