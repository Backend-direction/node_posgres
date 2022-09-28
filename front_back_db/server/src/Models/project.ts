import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  title: string;

  @Column({ type: 'timestamp' })
  created_at: Timestamp;
}