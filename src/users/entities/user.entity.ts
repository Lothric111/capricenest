import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    familyname: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    password: string;
}