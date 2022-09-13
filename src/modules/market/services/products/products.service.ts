import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../../../../entities/product.entity";
import { DataSource, Repository } from "typeorm";
import { ProductData } from "../../../../entities/product-data.entity";

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product)
              private productsRepository: Repository<Product>,
              @InjectRepository(ProductData)
              private productsDataRepository: Repository<ProductData>,
              private dataSource: DataSource
  ) {
  }

  async create(productData: any, url ?: string) {
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const product = new Product();
      product.name = productData?.product?.title_fa || "";
      product.url = url;
      product.data = [productData || {}];
      product.digikala_id = productData?.product?.id;
      console.log("saving product: ", { product });
      await queryRunner.manager.save(product);
      await queryRunner.commitTransaction();
      console.log("added: ", { product });
    } catch (err) {
      console.error({ err });
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
