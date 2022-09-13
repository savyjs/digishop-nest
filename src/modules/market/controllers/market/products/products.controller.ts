import { Controller, Get, Param } from "@nestjs/common";
import { HttpClientService } from "../../../services/http-client/http-client.service";
import { map } from "rxjs";
import { ProductsService } from "../../../services/products/products.service";

@Controller("products")
export class ProductsController {

  constructor(private httpClientService: HttpClientService, private productsService: ProductsService) {
  }

  @Get(":id")
  findOne(@Param() params): object {
    let id = params.id;
    let url = `https://api.digikala.com/v1/product/${id}/`;
    return this.httpClientService.findOne(url).pipe(
      map(async response => {
        let data = response.data?.data;
        await this.productsService.create(data, url);
        return data;
      })
    );
  }
}
