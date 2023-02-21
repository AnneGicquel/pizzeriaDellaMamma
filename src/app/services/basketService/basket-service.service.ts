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

// Fonction pour ajouter au panier
addToBasket(basketProduct : IBasketProduct) {
  // on récupère le panier
  const basket = this.getBasket();
  // on ajoute le produit dans le panier
  basket.push(basketProduct);
  //je sauvegarde mon panier
  this.saveBasket(basket);
}

// Fonction pour avoir le prix total du panier
getBasketTotalPrice() : void {
  // on récupère le panier
  const basket = this.getBasket();
// on utilise la methode reduce avec accumulator et current value pour avoir le prix total du panier
  const totalPrice = basket.reduce((accumulator: number, currentValue: IBasketProduct) => {
    // je recupère mon produit par id dans mon mock
    const product = this.productService.getProduct(currentValue.product.id);
    // si le produit n'existe pas je retourne la valeur de l'accumulator
    if (!product) return accumulator;
    // si le produit exsite on calcule le prix total
    return accumulator + (product!.price);
    //initialisation de l'accumulator à 0
    },0);
    // je donne le prix total au panier
    this.basketTotalPrice = totalPrice;
    console.log("Prix Total", totalPrice);
}

// Fonction pour supprimer un produit
removeProduct(index: number) {
const basket = this.getBasket();
// je retire l'élément de mon panier
basket.splice(index,1);
this.getBasketTotalPrice();
this.saveBasket(basket);

}

}
