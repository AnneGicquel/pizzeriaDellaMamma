import { Component } from '@angular/core';
import { BasketServiceService } from './services/basketService/basket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeriaDellaMamma';


  constructor (private basketService: BasketServiceService) {}

  ngOnInit() {
    this.basketService.getBasket();
    this.basketService.getBasketTotalPrice();
    
  }

}
