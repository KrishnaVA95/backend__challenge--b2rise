import { Router } from "express";
import { createProductController, deleteProductController, listProductController, updateProductController } from "../controllers/products.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { productSchemaRequest, productSchemaUpdate } from "../schema/products.schema";

const productsRoutes = Router()

productsRoutes.post('', 
ensureDataIsValid(productSchemaRequest),
createProductController)

productsRoutes.get('', 
listProductController)

productsRoutes.patch('/:id', 
ensureDataIsValid(productSchemaUpdate),
updateProductController)

productsRoutes.delete('/:id', 
deleteProductController)

export {productsRoutes}