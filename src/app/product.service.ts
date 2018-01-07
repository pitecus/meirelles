import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  list() {
    return this.http.get('/api/products');
  }
}
