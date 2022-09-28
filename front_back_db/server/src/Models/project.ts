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
    length: 256,
    unique: true,
  })
  name: string;

  @Column({ type: 'timestamp', default: Date.now })
  created_at: Timestamp;

  @Column({ type: 'timestamp', default: Date.now })
  updated_at: Timestamp;
}