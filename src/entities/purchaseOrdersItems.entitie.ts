import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "./product.entitie";
import { PurchaseOrder } from "./purchaseOrders.entitie";


@Entity('purchase_order_items')
class PurchaseOrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => PurchaseOrder)
    @JoinColumn({ name: 'purchase_order_id' })
    purchaseOrder: PurchaseOrder;

    @Column({ type: 'integer' })
    quantity: number;

    @Column({ type: 'decimal', precision: 15, scale: 2 })
    price: number;
}

export { PurchaseOrderItem }