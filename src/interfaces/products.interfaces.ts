import { z } from 'zod'
import { listProductsSchemaResponse, productSchema, productSchemaRequest, productSchemaResponse } from '../schema/products.schema'
import { DeepPartial } from 'typeorm'

type TProduct = z.infer<typeof productSchema>
type TProductRequest = z.infer<typeof productSchemaRequest>
type TProductResponse = z.infer<typeof productSchemaResponse>
type TListProductsResponse = z.infer<typeof listProductsSchemaResponse>
type TProductUpdate =  DeepPartial<TProductRequest>

type TProductPagination = {
    page: number | null | undefined,
    perPage: number | null | undefined,
    data: TListProductsResponse
}

export {
    TProduct, 
    TProductRequest, 
    TProductResponse,
    TListProductsResponse,
    TProductUpdate,
    TProductPagination
}