import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entitie"
import { AppError } from "../../errors/AppError"
import { TProductResponse, TProductUpdate } from "../../interfaces/products.interfaces"
import { productSchema } from "../../schema/products.schema"

const updateProductService = async (data: TProductUpdate, productId: string): Promise<TProductResponse> => {
    
    const productRepository = AppDataSource.getRepository(Product)
    const oldProduct = await productRepository.findOneBy({ id: productId })

    if (!oldProduct) {
        throw new AppError("product not found", 404)
    }

    let {price} = oldProduct

    const newProductData = productRepository.create({
        ...oldProduct,
        price: Number(price),
        ...data
    })

    await productRepository.save(newProductData)


    return productSchema.parse(newProductData)

}

export { updateProductService }