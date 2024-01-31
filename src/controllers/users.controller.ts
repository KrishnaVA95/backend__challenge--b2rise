import { Request, Response } from "express";


const createUserController = async(req: Request, res: Response) =>{
    return res.json('usuário criado')
}

export {createUserController}