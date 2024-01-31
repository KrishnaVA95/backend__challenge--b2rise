import { z } from 'zod'
import { productSchema, productSchemaRequest, productSchemaResponse } from '../schema/products.schema'

type TProduct = z.infer<typeof productSchema>
type TProductRequest = z.infer<typeof productSchemaRequest>
type TProductResponse = z.infer<typeof productSchemaResponse>

export {TProduct, TProductRequest, TProductResponse}