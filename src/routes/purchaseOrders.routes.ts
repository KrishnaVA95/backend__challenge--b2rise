import { Router } from "express";
import { createPurchaseOrdersController, listPurchaseOrdersByUserController } from "../controllers/purchaseOrders.controller";

const purchaseOrdersRoutes = Router()

purchaseOrdersRoutes.post('', 
createPurchaseOrdersController)

purchaseOrdersRoutes.get('/users/:id', 
listPurchaseOrdersByUserController)

export default purchaseOrdersRoutes