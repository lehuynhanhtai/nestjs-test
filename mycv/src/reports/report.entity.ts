import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // price: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  make: string;

  @Column()
  model: string;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;

  // @Column()
  // year: number;

  // @Column()
  // lng: number;

  // @Column()
  // lat: number;

  // @Column()
  // mileage: number;
}
