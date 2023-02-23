import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  basket : IBasketProduct[] = [];
  isVisibleBasket: boolean = true;
 
  

  constructor (
    public basketService : BasketServiceService,
    public router : Router
    ) {}

  ngOnInit() {
    this.basketService.getBasket();
    this.getQuantityBasket();
    this.displayIcons();
  }


  getQuantityBasket() {
    this.basketService.getQuantityBasket();
  }

  displayIcons() {
    if (this.router.url.endsWith("/summary")) {
      this.isVisibleBasket = false;
    }
    console.log("icone basket après", this.isVisibleBasket);
  }

  
}
