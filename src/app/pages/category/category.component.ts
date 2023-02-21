import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent {
  products : IProduct[]=[];
  constructor(private productService : ProductService){}

  ngOnInit(){
    this.products = this.getProducts();
  }

  getProducts(){
    return this.productService.getProducts();
  }
}
