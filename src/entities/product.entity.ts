import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProductData } from './product-data.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  digikala_id: string;

  @OneToMany(() => ProductData, (productData) => productData.productId)
  photos: ProductData[]

  @Column()
  created_at: string;

}
