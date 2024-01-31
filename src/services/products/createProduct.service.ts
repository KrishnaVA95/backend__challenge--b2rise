import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entitie";
import { TProductRequest, TProductResponse } from "../../interfaces/products.interfaces";


const createProductService = async(data: TProductRequest): Promise<TProductResponse> =>{
    const {title, price, description, category, image} = data

    const productRepository = AppDataSource.getRepository(Product)
    const findProduct = await productRepository.findOne({
        where:{
            title
        }
    })

    if(findProduct){
        throw new Error('product already exists')
    }

    const product = productRepository.create({
        title,
        price,
        description,
        category,
        image
    })

    await productRepository.save(product)
    return product
}

export {createProductService}