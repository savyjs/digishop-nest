import { Module } from "@nestjs/common";
import { ProductsController } from "./controllers/market/products/products.controller";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [ProductsController],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([])
  ],
  providers: []
})
export class MarketModule {

}
