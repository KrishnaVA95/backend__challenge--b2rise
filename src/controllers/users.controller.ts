import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";


const createUserController = async(req: Request, res: Response) =>{
    const newUser = await createUserService(req.body)
    return res.status(201).json(newUser)
}

const listUserController = async(req: Request, res: Response) =>{
    const list = await listUsersService()
    return res.status(200).json(list)
}

const updateUserController = async(req: Request, res: Response) =>{
    const updateUser = await updateUserService(req.body, req.params.id)
    return res.json(updateUser)
}

const deleteUserController = async(req: Request, res: Response) =>{
    await deleteUserService(req.params.id)
    return res.status(204).send()
}

export {
    createUserController,
    listUserController,
    updateUserController,
    deleteUserController
}