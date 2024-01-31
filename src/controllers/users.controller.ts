import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";


const createUserController = async(req: Request, res: Response) =>{
    const newUser = await createUserService(req.body)
    return res.status(201).json(newUser)
}

const listUserController = async(req: Request, res: Response) =>{
    const list = await listUsersService()
    return res.status(200).json(list)
}

const updateUserController = async(req: Request, res: Response) =>{}

const deleteUserController = async(req: Request, res: Response) =>{}

export {
    createUserController,
    listUserController
}