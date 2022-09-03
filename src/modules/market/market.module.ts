import { Module } from "@nestjs/common";
import { ProductsController } from "./controllers/market/products/products.controller";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";

@Module({
  controllers: [ProductsController],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Product])
  ],
  providers: []
})
export class MarketModule {

}
