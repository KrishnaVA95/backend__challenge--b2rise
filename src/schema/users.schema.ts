import {z} from 'zod'

const userSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    username: z.string(),
    password: z.string(),
    first_name: z.string(),
    last_name: z.string(),
})

const userSchemaRequest = userSchema.omit({
    id: true
})

const userSchemaResponse = userSchema.omit({
    password: true
})

export {userSchema, userSchemaRequest, userSchemaResponse}