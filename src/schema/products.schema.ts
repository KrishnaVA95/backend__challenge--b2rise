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

export {productSchema, productSchemaRequest, productSchemaResponse}