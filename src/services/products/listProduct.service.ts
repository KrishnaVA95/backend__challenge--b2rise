import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entitie"
import { TListProductsResponse, TProductPagination } from "../../interfaces/products.interfaces"
import { listProductsSchemaResponse } from "../../schema/products.schema"


const listProductsService = async (page: number, perPage: number, filters: any): Promise<TProductPagination> => {
    const productRepository = AppDataSource.getRepository(Product)

    let products: Product[] | undefined

    if(!page || !perPage){
        products = await productRepository.find({
            where: filters,
            order: {
                title: 'asc',
            }
        })
    }else{
        products = await productRepository.find({
            where: filters,
            skip: (page -1) * perPage,
            take: perPage,
            order: {
                title: 'asc',
            }
        })
    }


    if(products.length !== 0){
        products = products.map(product => ({
            ...product,
            price: Number(product.price)
        }))
    }
    const returnProducts = listProductsSchemaResponse.parse(products)
    return {
        page: page || null,
        perPage: perPage || null,
        data: returnProducts,
    }
}

export { listProductsService }