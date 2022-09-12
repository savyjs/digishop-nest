import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class HttpClientService {
  constructor(private readonly httpService: HttpService) {
  }

  findOne(id: string): Observable<AxiosResponse> {
    return this.httpService.get("https://api.digikala.com/v1/product/" + id);
  }
}
