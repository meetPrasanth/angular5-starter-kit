import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  _get(url) {
    return this.httpClient.get(url);
  }

  _post(url, data) {
    return this.httpClient.post(url, data);
  }

  _put(url, data) {
    return this.httpClient.put(url, data);
  }

  _delete(url) {
    return this.httpClient.delete(url);
  }
  
}
