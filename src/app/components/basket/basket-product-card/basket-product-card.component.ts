import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/mocks/products';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';
import { CustomisationService } from 'src/app/services/customisation/customisation.service';

@Component({
  selector: 'app-basket-product-card',
  templateUrl: './basket-product-card.component.html',
  styleUrls: ['./basket-product-card.component.css'],
})
export class BasketProductCardComponent {

  // Je récupère mon panier
  basket: IBasketProduct[] = [];

  //je recupère la liste des produits temporaires customisé
  // productsList: IProduct[] = [];
  allCustomisedProductPrice: number[] = [];

  //propriété pour afficher le bouton supprimer un produit
  isButtonVisible: boolean = true;
  ingredientsExclus: boolean = false;
  extraInclus: boolean = false;

  constructor(
    private basketService: BasketServiceService,
    private router: Router,
    private customService: CustomisationService) { };

  ngOnInit() {
    this.getBasket();
    this.displayButtonRemoveProduct();
  //  this.displayIconIngredient();
   // this.displayIconExtra();
  }

  getBasket() {
    this.basket = this.basketService.getBasket();
    this.getPriceProductCustom();
  }

  removeProduct(index: number) {
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

  // Fonction qui rempli un tableau avec les prix custom des pizza
  getPriceProductCustom() {
    for (let i = 0; i < this.basket.length; i++) {
      console.log("prix clara", this.basket[i].customPrice);

    }


  }

  // displayIconIngredient() {
  //   const basket = this.basketService.getBasket();
  //   for (let i = 0; i < basket.length; i++) {
  //    // for (j = 0; j < includedIngredients.length; j++) {
  //       if (this.basket[i].product.includedIngredients[i].isSelected === false) {
  //         this.ingredientsExclus = true;


  //       }
  //     }
  //   }
  
  // displayIconExtra() {
  //   const basket = this.basketService.getBasket();
  //   for (let i = 0; i < basket.length; i++) {
  //     if (this.basket[i].product.extras[i].quantity > 0) {
  //       this.extraInclus = true;
  //     }
  //   }
  // }
}