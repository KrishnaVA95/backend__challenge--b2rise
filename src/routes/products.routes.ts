import { Router } from "express";
import { createProductController, deleteProductController, listProductController, retriveProductByIdController, updateProductController } from "../controllers/products.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { productSchemaRequest, productSchemaUpdate } from "../schema/products.schema";

const productsRoutes = Router()

productsRoutes.post('', 
ensureDataIsValid(productSchemaRequest),
createProductController)

productsRoutes.get('', 
listProductController)

productsRoutes.get('/:id', 
retriveProductByIdController)

productsRoutes.patch('/:id', 
ensureDataIsValid(productSchemaUpdate),
updateProductController)

productsRoutes.delete('/:id', 
deleteProductController)

export {productsRoutes}