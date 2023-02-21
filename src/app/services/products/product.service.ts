import { Injectable } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():IProduct[]{
    return PRODUCTS;
  }
}
