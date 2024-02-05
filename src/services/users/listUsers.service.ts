import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { TListUsersResponse } from "../../interfaces/users.interfaces"
import { listUsersSchemaResponse } from "../../schema/users.schema"


const listUsersService = async (): Promise<TListUsersResponse> => {
    const productRepository = AppDataSource.getRepository(User)
    const users: User[] = await productRepository.find()
    return listUsersSchemaResponse.parse(users)
}

export { listUsersService }