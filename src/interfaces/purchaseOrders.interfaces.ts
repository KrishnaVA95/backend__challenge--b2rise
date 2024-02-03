import { z } from 'zod'
import { purchaseOrderSchema, purchaseOrderSchemaRequest, purchaseOrderSchemaResponse } from "../schema/purchaseOrders.schema"



type TPurchaseOrder = z.infer<typeof purchaseOrderSchema>
type TPurchaseOrderRequest = z.infer<typeof purchaseOrderSchemaRequest>
type TPurchaseOrderResponse = z.infer<typeof purchaseOrderSchemaResponse>

export {
    TPurchaseOrder,
    TPurchaseOrderRequest,
    TPurchaseOrderResponse
}