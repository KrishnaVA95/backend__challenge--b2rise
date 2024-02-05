import {z} from 'zod'
import { purchaseOrderItemSchema } from './purchaseOrderItem.schema'

const purchaseOrderSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    date: z.date(),
    items: z.array(purchaseOrderItemSchema),
})

const purchaseOrderSchemaRequest = purchaseOrderSchema.omit({
    id: true,
    date: true,
    items: true
})

const purchaseOrderSchemaResponse = purchaseOrderSchema

export {
    purchaseOrderSchema,
    purchaseOrderSchemaRequest,
    purchaseOrderSchemaResponse
}