import { Router } from "express";
import { createProductController } from "../controllers/products.controller";

const productsRoutes = Router()

productsRoutes.post('', 
createProductController)

export {productsRoutes}