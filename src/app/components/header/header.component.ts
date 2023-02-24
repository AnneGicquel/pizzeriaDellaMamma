import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';
import { TableFormServiceService } from 'src/app/services/tableFormService/table-form-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //basket : IBasketProduct[] = [];
  

  constructor (
    public basketService : BasketServiceService,
    public router : Router,
    public tableFormService: TableFormServiceService
    
    ) {}

  // ngOnInit() {
  //   this.basketService.getBasket();
  //   this.getQuantityBasket();
  // }


  // getQuantityBasket() {
  //   this.basketService.getQuantityBasket();
  // }
  

  getNumberTable(){
    const getNumberTable = this.tableFormService.getTableNumberInfo();
    return getNumberTable
}

}
