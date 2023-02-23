import { Component } from '@angular/core';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  basket : IBasketProduct[] = [];
  quantity?: number = 0;
  

  constructor (private basketService : BasketServiceService) {}

  ngOnInit() {
    this.getNumberBasket();
  }


  getNumberBasket() {
    const basket = this.basketService.getBasket();
    const quantity = basket.length;
    this.quantity = quantity;
    
  
  }

}
