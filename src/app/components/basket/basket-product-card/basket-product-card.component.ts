import { Component } from '@angular/core';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';

@Component({
  selector: 'app-basket-product-card',
  templateUrl: './basket-product-card.component.html',
  styleUrls: ['./basket-product-card.component.css'],
})
export class BasketProductCardComponent {

// Je récupère mon panier
basket: IBasketProduct[] = [];

constructor (private basketService : BasketServiceService) {};

ngOnInit() {
  this.getBasket();
}

getBasket() {
  this.basket = this.basketService.getBasket();
}

removeProduct(index:number) {
  this.basketService.removeProduct(index);
  this.getBasket();

}
resetBasket() {
  this.basketService.resetBasket();
}



}
