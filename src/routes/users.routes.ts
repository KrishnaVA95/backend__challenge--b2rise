import { Router } from "express";
import { createUserController, deleteUserController, listUserController, retriveUserController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { userSchemaRequest, userSchemaUpdate } from "../schema/users.schema";

const userRoutes = Router()

userRoutes.post('', 
ensureDataIsValid(userSchemaRequest),
createUserController)

userRoutes.get('', 
listUserController)

userRoutes.get('/:id', 
retriveUserController)

userRoutes.patch('/:id', 
ensureDataIsValid(userSchemaUpdate),
updateUserController)

userRoutes.delete('/:id', 
deleteUserController)

export {userRoutes}