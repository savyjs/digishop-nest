import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class HttpClientService {
  constructor(private readonly httpService: HttpService) {
  }

  findOne(url: string): Observable<AxiosResponse> {
    return this.httpService.get(url);
  }

}
