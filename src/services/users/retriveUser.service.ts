import { AppDataSource } from "../../data-source";
import { PurchaseOrder } from "../../entities/purchaseOrders.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";




const retriveUserService = async (userId: string, filter: Partial<PurchaseOrder> | null): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where:{
            id: userId
        },
        relations: ['purchase_orders', 'purchase_orders.items'] 
    })

    if(!user){
        throw new AppError('User not found', 404)
    }

    if(filter != null){
        user.purchase_orders = user.purchase_orders.filter(order => {
            return Object.keys(filter).every(key => {
                if (key === 'date') {
                    // Convert both dates to ISO strings before comparing
                    const orderDate = new Date(order[key] as Date).toISOString().split('T')[0];
                    const filterDate = new Date(filter[key] as string).toISOString().split('T')[0];
                    return orderDate === filterDate;
                } else {
                    return order[key as keyof PurchaseOrder] === filter[key as keyof PurchaseOrder];
                }
            });
        });
    }
    

    return user

}

export default retriveUserService