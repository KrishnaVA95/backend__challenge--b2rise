import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn } from "typeorm";
import { User } from "./user.entitie";
import { PurchaseOrderItem } from "./purchaseOrdersItems.entitie";


@Entity('purchase_orders')
class PurchaseOrder {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @CreateDateColumn()
    date: Date | string;

    @OneToMany(() => PurchaseOrderItem, (item) => item.purchaseOrder)
    items: PurchaseOrderItem[];
}

export { PurchaseOrder }