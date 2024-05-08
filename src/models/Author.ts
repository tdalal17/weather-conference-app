
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Conference } from './Conference';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  name!: string;

  @OneToMany(() => Conference, (conference) => conference.author)
  conferences!: Conference[];
}