import { Injectable } from '@angular/core';
import { HttproutingserviceService } from './httproutingservice.service';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private httpRoutingService: HttproutingserviceService) { }
  generateJson(data: any) {
    return this.httpRoutingService.postMethod('getquery', data);
  }
}
