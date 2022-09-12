import { Controller, Get, Param } from "@nestjs/common";
import { HttpClientService } from "../../../services/http-client/http-client.service";

@Controller("products")
export class ProductsController {
  private httpClientService: HttpClientService;

  @Get(":id")
  findOne(@Param() params): object {
    let id = params.id;
    let object = this.httpClientService.findOne(id);
    console.log({ object });
    return object;
  }
}
