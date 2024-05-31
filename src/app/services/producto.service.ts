import { Injectable } from '@angular/core';

import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoModel } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) {}

  getProducto(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.ApiUrl}`);
  }
}
