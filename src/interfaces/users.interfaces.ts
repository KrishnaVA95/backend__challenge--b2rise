import { z } from 'zod'
import { listUsersSchemaResponse, userSchema, userSchemaRequest, userSchemaResponse } from '../schema/users.schema'
import { DeepPartial } from 'typeorm'

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TListUsersResponse = z.infer<typeof listUsersSchemaResponse>
type TUserUpdate =  DeepPartial<TUserRequest>

export {
    TUser, 
    TUserRequest, 
    TUserResponse,
    TListUsersResponse,
    TUserUpdate
}