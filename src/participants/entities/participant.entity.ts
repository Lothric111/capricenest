import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Participant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    famil_name: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    password: string;

    @Column()
    image_path: string;

    @Column({default:true})
    is_accepted: boolean;

    @Column({default:false})
    winner: boolean;
}