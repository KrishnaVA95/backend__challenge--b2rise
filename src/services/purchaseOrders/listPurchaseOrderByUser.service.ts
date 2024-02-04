import { AppDataSource } from "../../data-source"
import { PurchaseOrder } from "../../entities/purchaseOrders.entitie"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/AppError"


const listPurchaseOrderByUserService = async (userId: string, filter: any): Promise<PurchaseOrder[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const ordersRepository = AppDataSource.getRepository(PurchaseOrder)

    const user: User | null = await userRepository.findOne({
        where:{
            id: userId
        },
    })

    if(!user){
        throw new AppError('User not found', 404)
    }

    const ordersByUser : PurchaseOrder[]= await ordersRepository.find({
        where:{
            user: user,
            ...filter
        },
        relations: ['items', 'items.product']
    })

    return ordersByUser
}

export default listPurchaseOrderByUserService