import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';

@Component({
  selector: 'app-basket-product-card',
  templateUrl: './basket-product-card.component.html',
  styleUrls: ['./basket-product-card.component.css'],
})
export class BasketProductCardComponent {

// Je recupère la liste des produits du mock
listOfProducts : IProduct[] = PRODUCTS;
product?: IProduct;




}
