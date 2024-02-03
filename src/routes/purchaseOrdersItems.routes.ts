import { Router } from "express";
import { createPurchaseOrdersItemController } from "../controllers/purchaseOrdersItems.controller";

const purchaseOrdersItemsRoutes = Router()

purchaseOrdersItemsRoutes.post('', 
createPurchaseOrdersItemController)

export default purchaseOrdersItemsRoutes