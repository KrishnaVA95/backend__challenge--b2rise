import { Router } from "express";
import { createUserController, listUserController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { userSchemaRequest, userSchemaUpdate } from "../schema/users.schema";

const userRoutes = Router()

userRoutes.post('', 
ensureDataIsValid(userSchemaRequest),
createUserController)

userRoutes.get('', 
listUserController)

userRoutes.patch('/:id', 
ensureDataIsValid(userSchemaUpdate),
updateUserController)

export {userRoutes}