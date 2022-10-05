import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
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
  name: string;
  
  @Column({
    type: 'varchar',
    length: 250,
  })
  description: string;
  
  @Column({
    type: 'varchar',
    length: 250,
  })
  image: string;

  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at: Date
}