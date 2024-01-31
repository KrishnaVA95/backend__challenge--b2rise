import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

}

export {User}