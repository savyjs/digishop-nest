import { Module } from "@nestjs/common";
import { ProductsController } from "./controllers/market/products/products.controller";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpClientService } from './services/http-client/http-client.service';

@Module({
  controllers: [ProductsController],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([])
  ],
  providers: [HttpClientService]
})
export class MarketModule {

}
