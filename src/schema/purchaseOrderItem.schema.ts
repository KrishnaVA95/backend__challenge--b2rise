import {z} from 'zod'

const purchaseOrderItemSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    purchase_order_id: z.string(),
    quantity: z.number(),
    price: z.number()
})

const purchaseOrderItemSchemaRequest = purchaseOrderItemSchema.omit({
    id: true,
    price: true
})

const purchaseOrderItemSchemaResponse = purchaseOrderItemSchema

export {
    purchaseOrderItemSchema,
    purchaseOrderItemSchemaRequest,
    purchaseOrderItemSchemaResponse
}