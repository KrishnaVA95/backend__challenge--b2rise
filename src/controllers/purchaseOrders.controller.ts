import { Request, Response } from "express"
import { createPurchaseOrderService } from "../services/purchaseOrders/createPurchaseOrder.service"
import listPurchaseOrderByUserService from "../services/purchaseOrders/listPurchaseOrderByUser.service"
import { PurchaseOrder } from "../entities/purchaseOrders.entitie"


const createPurchaseOrdersController = async(req: Request, res: Response) =>{
    const newPurchaseOrder = await createPurchaseOrderService(req.body)
    return res.status(201).json(newPurchaseOrder)
}

const listPurchaseOrdersByUserController = async(req: Request, res: Response) =>{
    const filters: any = req.query.filters ? JSON.parse(req.query.filters as string) : {}; 
    const ordersListByUser = await listPurchaseOrderByUserService(req.params.id, filters )
    return res.status(200).json(ordersListByUser)
}

export {
    createPurchaseOrdersController,
    listPurchaseOrdersByUserController
}