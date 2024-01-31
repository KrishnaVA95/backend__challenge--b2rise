import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { userSchemaRequest } from "../schema/users.schema";

const userRoutes = Router()

userRoutes.post('', 
ensureDataIsValid(userSchemaRequest),
createUserController)

export {userRoutes}