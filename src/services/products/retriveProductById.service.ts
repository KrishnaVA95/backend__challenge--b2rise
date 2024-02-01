import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entitie"
import { AppError } from "../../errors/AppError"
import { TProductResponse } from "../../interfaces/products.interfaces"
import { productSchemaResponse } from "../../schema/products.schema"



const retrieveProductByIdService = async (productId: string): Promise<TProductResponse> => {
    const productsRepository = AppDataSource.getRepository(Product)

    let product = await productsRepository.findOneBy({ id: productId })


    if (!product) {
        throw new AppError('Product not found', 404)
    }

    if(typeof(product.price) !== 'number'){
        product.price = Number(product?.price)
    }

    const returnProduct: TProductResponse = productSchemaResponse.parse(product)

    return returnProduct
}

export default retrieveProductByIdService