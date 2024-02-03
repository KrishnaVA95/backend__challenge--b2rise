import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entitie"
import { PurchaseOrder } from "../../entities/purchaseOrders.entitie"
import { PurchaseOrderItem } from "../../entities/purchaseOrdersItems.entitie"
import { AppError } from "../../errors/AppError"
import { TPurchaseOrderItemRequest } from "../../interfaces/purchaseOrdersItem.interfaces"



const createPurchaseOrderItemService = async(data: TPurchaseOrderItemRequest): Promise<PurchaseOrderItem> =>{
    const {product_id, purchase_order_id, quantity } = data

    const purchaseOrderItensRepository = AppDataSource.getRepository(PurchaseOrderItem)
    const productsRepository = AppDataSource.getRepository(Product)
    const ordersRepository = AppDataSource.getRepository(PurchaseOrder)
    
    const findOrder = await ordersRepository.findOne({
        where:{
            id: purchase_order_id
        }
    })
    const findProduct = await productsRepository.findOne({
        where:{
            id: product_id
        }
    })

    if(!findOrder){
        throw new AppError('order not found', 409)
    }

    if(!findProduct){
        throw new AppError('product not found', 409)
    }


    const orderItem = purchaseOrderItensRepository.create({
        ...data,
        product: findProduct, 
        purchaseOrder: findOrder,
        price: Number(quantity) * findProduct.price
    });
    
    await purchaseOrderItensRepository.save(orderItem);
    
    return orderItem
}

export {createPurchaseOrderItemService}
