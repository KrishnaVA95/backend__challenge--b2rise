import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entitie"
import { AppError } from "../../errors/AppError"


const deleteProductService = async (productId: string): Promise<void> => {
    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOneBy({ id: productId })

    if (!product) {
        throw new AppError("product not found", 404)
    }

    await productRepository.remove(product)

}

export { deleteProductService }