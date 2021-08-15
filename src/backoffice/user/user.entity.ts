import { Product } from 'src/product/entities/product.entity';
import { ManyToOne, OneToMany } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @ManyToOne((type) => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
