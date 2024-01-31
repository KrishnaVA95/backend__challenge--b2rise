import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entitie"
import { TListProductsResponse } from "../../interfaces/products.interfaces"
import { listProductsSchemaResponse } from "../../schema/products.schema"


const listProductsService = async (): Promise<TListProductsResponse> => {
    const productRepository = AppDataSource.getRepository(Product)
    let products: Product[] = await productRepository.find()

    if(products.length !== 0){
        products = products.map(product => ({
            ...product,
            price: Number(product.price)
        }))
    }

    return listProductsSchemaResponse.parse(products)
}

export { listProductsService }