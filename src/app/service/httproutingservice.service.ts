import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class HttproutingserviceService {

  environment: any;
  constructor(private HttpClient: HttpClient, @Inject('environment') environment: any) {
    this.environment = environment;
  }

  getMethod(url: string, queryParams?: any) {
    const apiUrl = this.generateUrl(url);
    return this.HttpClient.get(apiUrl, {
      params: queryParams
    })
  }
  postMethod(url: any, data: any, queryParams?: any) {
    const apiUrl = this.generateUrl(url);
    return this.HttpClient.post(apiUrl, data, {
      params: queryParams,
    });
  }
  replaceUrlParam(url: any, obj: any) {
    for (const key in obj) {
      let replaceText = '{' + key + '}';
      url = url.replace(replaceText, obj[key]);
    }
    return url;
  }
  putMethod(url: string, data?: any, queryParams?: any) {
    url = url.replace(/#/g, "%23");
    const apiUrl = this.generateUrl(url)
    return this.HttpClient.put(apiUrl, data, {
      params: queryParams,
    });
  }
  deleteMethod(url: string, queryParams?: any) {
    url = url.replace(/#/g, "%23");
    const apiUrl = this.generateUrl(url);
    return this.HttpClient.delete(apiUrl, { params: queryParams })
  }

  generateUrl(url: any) {
    console.log("this.environment.apiUrlDb", this.environment.apiUrlDb);


    const apiUrl = [this.environment.apiUrlDb, 'v1', url].join('/');
    return apiUrl;
  }

}
