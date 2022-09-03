import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/market/products/products.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ProductsController],
  imports:[HttpModule],
  providers: [],
})
export class MarketModule {

}
