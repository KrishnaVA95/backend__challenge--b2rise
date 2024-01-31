import { Request, Response } from "express";


const createProductController = async(req: Request, res: Response) =>{
    return res.json('produto criado')
}

export {createProductController}