import { AppDataSource } from "../../data-source"
import { PurchaseOrder } from "../../entities/purchaseOrders.entitie"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/AppError"
import { TPurchaseOrderRequest, TPurchaseOrderResponse } from "../../interfaces/purchaseOrders.interfaces"



const createPurchaseOrderService = async(data: TPurchaseOrderRequest): Promise<PurchaseOrder> =>{
    const {user_id} = data

    const purchaseOrderRepository = AppDataSource.getRepository(PurchaseOrder)
    const userRepository = AppDataSource.getRepository(User)
    
    const findUser = await userRepository.findOne({
        where:{
            id: user_id
        }
    })

    if(!findUser){
        throw new AppError('user not found', 409)
    }


    const order = purchaseOrderRepository.create({
        ...data,
        user: findUser, 
    });
    
    await purchaseOrderRepository.save(order);
    
    return order
}

export {createPurchaseOrderService}


