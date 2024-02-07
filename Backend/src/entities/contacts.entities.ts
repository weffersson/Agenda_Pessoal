import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entities';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;
  
  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 12 })
  phone: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;
}

export { Contact };
