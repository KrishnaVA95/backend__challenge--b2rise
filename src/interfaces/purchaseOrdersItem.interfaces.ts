import { z } from 'zod'
import { purchaseOrderItemSchema, purchaseOrderItemSchemaRequest, purchaseOrderItemSchemaResponse } from '../schema/purchaseOrderItem.schema'


type TPurchaseOrderItem = z.infer<typeof purchaseOrderItemSchema>
type TPurchaseOrderItemRequest = z.infer<typeof purchaseOrderItemSchemaRequest>
type TPurchaseOrderItemResponse = z.infer<typeof purchaseOrderItemSchemaResponse>

export {
    TPurchaseOrderItem,
    TPurchaseOrderItemRequest,
    TPurchaseOrderItemResponse
}