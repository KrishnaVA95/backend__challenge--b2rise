import { Request, Response } from "express"
import { createPurchaseOrderItemService } from "../services/purchaseOrderItem/createPurchaseOrderItem.service"


const createPurchaseOrdersItemController = async(req: Request, res: Response) =>{
    const newPurchaseOrderItem = await createPurchaseOrderItemService(req.body)
    return res.status(201).json(newPurchaseOrderItem)
}


export {
    createPurchaseOrdersItemController
}