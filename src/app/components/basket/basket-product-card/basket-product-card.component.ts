import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';

@Component({
  selector: 'app-basket-product-card',
  templateUrl: './basket-product-card.component.html',
  styleUrls: ['./basket-product-card.component.css'],
})
export class BasketProductCardComponent {

// Je récupère mon panier
basket: IBasketProduct[] = [];

//propriété pour afficher le bouton supprimer un produit
isButtonVisible :boolean = true;

constructor (private basketService : BasketServiceService,
  private router : Router) {};

ngOnInit() {
  this.getBasket();
  this.displayButtonRemoveProduct();
}

getBasket() {
  this.basket = this.basketService.getBasket();
}

removeProduct(index:number) {
  this.basketService.removeProduct(index);
  this.getBasket();

}

//Fonction pour faire disparatitre le bouton supprimer un produit du panier quand on est sur la page summary
displayButtonRemoveProduct() {
  //jSi je suis sur la page summary, je fais disparaitre le bouton supprimer un produit
  if (this.router.url.endsWith("/summary")) {
    this.isButtonVisible = false;
  }

}




}
