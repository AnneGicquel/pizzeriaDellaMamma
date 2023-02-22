import { Component } from '@angular/core';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
isButtonVisible = false;
basket : IBasketProduct[] = [];

constructor (public basketService: BasketServiceService) {}

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.basket = this.basketService.getBasket();
  }
  
}
