import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class ProductData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("simple-json")
  json: {};

  @Column()
  productId: number;

  @ManyToOne(() => Product, (product) => product.data)
  product: Product

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}
