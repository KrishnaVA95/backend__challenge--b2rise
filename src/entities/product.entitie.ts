import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 30 })
    title: string;

    @Column({ type: 'decimal', precision: 11, scale: 2 })
    price: number;

    @Column({ type: 'varchar', length: 100 })
    description: string;

    @Column({ type: 'varchar', length: 50 })
    category: string;

    @Column({ type: 'varchar', length: 200 })
    image: string;
}

export { Product }