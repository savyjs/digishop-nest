import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  json: JSON;

  @Column()
  url: string;

  @Column()
  productId: number;
}
