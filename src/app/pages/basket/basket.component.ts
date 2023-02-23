import { Component } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  basket : IBasketProduct[] = [];
  

  constructor (public basketService: BasketServiceService) {}

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.basket = this.basketService.getBasket();
  }

  removeProduct(index: number) {
    this.basketService.removeProduct(index);
    this.getBasket();
  }

  resetBasket() {
    this.basketService.resetBasket();
    this.getBasket();
  }
  

}
