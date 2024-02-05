import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from "typeorm";
import { PurchaseOrder } from "./purchaseOrders.entitie";

@Entity('users')
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    username: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;
    
    @Column({ type: 'varchar', length: 50 })
    first_name: string;

    @Column({ type: 'varchar', length: 50 })
    last_name: string;

    @OneToMany(() => PurchaseOrder, (purchase_order) => purchase_order.user)
    purchase_orders: PurchaseOrder[]

    @BeforeInsert()
    transformEmailLower(){
        this.email = this.email.toLowerCase()
    }
}

export {User}