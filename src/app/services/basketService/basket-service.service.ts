import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';
import { ProductService } from '../products/product.service';


//Créer une interface pour le panier avec une seule propriété le produit
export interface IBasketProduct {
  product: IProduct;
}


@Injectable({
  providedIn: 'root'
})
export class BasketServiceService {

  //j'initialise mon panier total à 0
  basketTotalPrice: number = 0;

  // j'utilise le service Product Service
  constructor(private productService: ProductService) { }


  //Methode pour créer un panier
  private createBasket() {
    //je transforme le panier qui est un objet en string
    const newBasket = JSON.stringify([]);
    // j'enregistre le panier avec setItem (clé,valeur)
    localStorage.setItem('basket', newBasket);
  }

  //Methode pour transformer le panier en string et l'enregistrer
  private saveBasket(basket: IBasketProduct[]) {
    localStorage.setItem('basket', JSON.stringify(basket));
    this.getBasketTotalPrice();
  }

// Methode pour récupérer le panier et le créer si il n'existe pas
getBasket() {
  //on stocke dans une variable basket le panier que l'on a récupéré dans le local storage
  const basket = localStorage.getItem('basket');
  //si le panier existe, je le transforme en objet et le retourne
  if(basket) {
    return JSON.parse(basket);
  } else {
    //sinon on crée le panier et on le récupère , on fait une récursivité sur la fonction getBasket
    this.createBasket();
    this.getBasket();
  }
}

addToBasket(basketProduct : IBasketProduct) {
  // on récupère le panier
  const basket = this.getBasket();
  // on ajoute le produit dans le panier
  basket.push(basketProduct);
  //je sauvegarde mon panier
  this.saveBasket(basket);
}

getBasketTotalPrice() : void {
  // on récupère le panier
  const basket = this.getBasket();
// on utilise la methode reduce avec accumulator et current value pour avoir le prix total du panier
  const totalPrice = basket.reduce((accumulator: number, currentValue: IBasketProduct) => {
    // je recupère mon produit par id dans mon mock
    const product = this.productService.getProducts(currentValue.product.id);

  })
}

}
