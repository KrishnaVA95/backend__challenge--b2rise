import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors/AppError";


const createUserService = async(data: TUserRequest): Promise<TUserResponse> =>{
    const {email, username, password, first_name, last_name} = data

    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where:{
            email
        }
    })

    if(findUser){
        throw new AppError('user already exists', 409)
    }

    const hashedPassword = await hash(password, 10)
    const user = userRepository.create({
        email,
        username,
        password: hashedPassword,
        first_name,
        last_name
    })

    await userRepository.save(user)
    return user
}

export {createUserService}