import { Component } from '@angular/core';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  basket : IBasketProduct[] = [];

  constructor (public basketservice: BasketServiceService) {}

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.basket = this.basketservice.getBasket();
  }

  removeProduct(index: number) {
    this.basketservice.removeProduct(index);
    this.getBasket();
  }


}
