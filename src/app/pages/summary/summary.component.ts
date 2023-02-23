import { Component } from '@angular/core';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';
import { TableFormServiceService } from 'src/app/services/tableFormService/table-form-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
isButtonVisible = false;
basket : IBasketProduct[] = [];

constructor (
  public basketService: BasketServiceService,
  private tableFormService : TableFormServiceService
  )
   {}

  ngOnInit() {
    this.getBasket();
    this.getTableNumber();
  }

  getBasket() {
    this.basket = this.basketService.getBasket();
  }
  
  //Fonction pour vider le panier
  resetBasket(){
    this.basketService.resetBasket();
  }

   // Fonction pour récupérer le numéro de table
   getTableNumber() {
    const tableNumber = this.tableFormService.getTableNumberInfo();
    return tableNumber;
  }
}
