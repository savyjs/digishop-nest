import { Module } from "@nestjs/common";
import { ProductsController } from "./controllers/market/products/products.controller";

@Module({
  controllers: [ProductsController]
})
export class MarketModule {

}
