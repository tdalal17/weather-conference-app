
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Conference } from './Conference';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Conference, (conference) => conference.author)
  conferences!: Conference[];
}