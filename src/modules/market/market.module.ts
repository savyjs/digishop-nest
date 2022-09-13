import { Module } from "@nestjs/common";
import { ProductsController } from "./controllers/market/products/products.controller";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpClientService } from "./services/http-client/http-client.service";
import { ProductsService } from "./services/products/products.service";
import { Product } from "../../entities/product.entity";
import { ProductData } from "../../entities/product-data.entity";

@Module({
  controllers: [ProductsController],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Product, ProductData])
  ],
  providers: [HttpClientService, ProductsService]
})
export class MarketModule {

}
