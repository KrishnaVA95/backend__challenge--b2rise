import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";


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

    @Column({
        type: 'varchar',
        length: 50,
        transformer: {
            to(value: string): string {
                return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            },
            from(value: string): string {
                return value;
            }
        }
    })
    category: string;

    @Column({ type: 'varchar', length: 200 })
    image: string;

}

export { Product }