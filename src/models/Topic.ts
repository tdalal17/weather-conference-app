
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Conference } from './Conference';
import 'reflect-metadata';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Conference, (conference) => conference.topic)
  conferences!: Conference[];
}