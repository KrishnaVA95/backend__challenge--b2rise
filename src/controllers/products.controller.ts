import { Request, Response } from "express";
import { createProductService } from "../services/products/createProduct.service";


const createProductController = async(req: Request, res: Response) =>{
    const newProduct = await createProductService(req.body)
    return res.status(201).json(newProduct)
}

export {createProductController}