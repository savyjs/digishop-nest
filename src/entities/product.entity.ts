import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ProductData } from "./product-data.entity";

@Entity()
@Unique('constraint_name', ['digikala_id'])
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  digikala_id: string;

  @OneToMany(() => ProductData, (productData) => productData.product)
  data: ProductData[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

}
