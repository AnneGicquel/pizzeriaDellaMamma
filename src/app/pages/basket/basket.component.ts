import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/mocks/products';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';
import { TableFormServiceService } from 'src/app/services/tableFormService/table-form-service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  basket : IBasketProduct[] = [];
  isVisibleBasket: boolean = true;
  

  constructor (
    public basketService: BasketServiceService,
    private tableFormService : TableFormServiceService,
    public router : Router
    ) {}

  ngOnInit() {
    this.getBasket();
    this.getTableNumber();
    console.log("mon panier", this.basket);
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
    // this.isVisibleBasket = false;
  }
  
  // Fonction pour récupérer le numéro de table
  getTableNumber() {
    const tableNumber = this.tableFormService.getTableNumberInfo();
    return tableNumber;
    console.log('table', tableNumber);
  }
  // displayIcons() {
  //   if (this.router.url.endsWith("/summary")) {
  //     this.isVisibleBasket = false;
  //   }
  //   console.log("icone basket après", this.isVisibleBasket);
  // }

}
