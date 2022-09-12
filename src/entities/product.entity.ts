import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from "typeorm";
import { ProductData } from './product-data.entity';

@Entity()
export class Product {
  @PrimaryColumn()
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
