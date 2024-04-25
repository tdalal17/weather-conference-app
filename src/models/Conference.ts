
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Author } from './Author';
import { Topic } from './Topic';

@Entity()
export class Conference {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  location!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;

  @ManyToOne(() => Author)
  @JoinColumn()
  author!: Author;

  @ManyToOne(() => Topic)
  @JoinColumn()
  topic!: Topic;
}