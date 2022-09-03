import { Controller, Get, Param } from "@nestjs/common";

@Controller('products')
export class ProductsController {
  @Get(':id')
  findOne(@Param() params): object {
    let url = 'https://api.digikala.com/v1/product/6390361/';
    let object = {};
    return object;
  }
}
