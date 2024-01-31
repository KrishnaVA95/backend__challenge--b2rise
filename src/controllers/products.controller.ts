import { Request, Response } from "express";
import { createProductService } from "../services/products/createProduct.service";
import { listProductsService } from "../services/products/listProduct.service";
import { updateProductService } from "../services/products/updateProduct.service";
import { deleteProductService } from "../services/products/deleteProduct.service";


const createProductController = async(req: Request, res: Response) =>{
    const newProduct = await createProductService(req.body)
    return res.status(201).json(newProduct)
}

const listProductController = async(req: Request, res: Response) =>{
    const list = await listProductsService()
    return res.status(200).json(list)
}

const updateProductController = async(req: Request, res: Response) =>{
    const updateProduct = await updateProductService(req.body, req.params.id)
    return res.json(updateProduct)
}

const deleteProductController = async(req: Request, res: Response) =>{
    await deleteProductService(req.params.id)
    return res.status(204).send()
}

export {
    createProductController,
    listProductController,
    updateProductController,
    deleteProductController
}