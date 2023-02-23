import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-tag-type',
  templateUrl: './tag-type.component.html',
  styleUrls: ['./tag-type.component.css']
})

export class TagTypeComponent {
  products:IProduct[]=PRODUCTS;


  constructor(private productService : ProductService){};

}