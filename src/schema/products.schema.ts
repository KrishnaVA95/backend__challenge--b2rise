import {z} from 'zod'

const productSchema = z.object({
    id: z.string(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
})

const productSchemaRequest = productSchema.omit({
    id: true
})

const productSchemaResponse = productSchema

const productSchemaUpdate = productSchema.omit({
    id: true
}).partial()

const listProductsSchemaResponse = z.array(productSchemaResponse)

export {
    productSchema, 
    productSchemaRequest, 
    productSchemaResponse, 
    productSchemaUpdate,
    listProductsSchemaResponse
}