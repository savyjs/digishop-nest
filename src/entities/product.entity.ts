import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

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

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[]

  @Column()
  created_at: string;

}
