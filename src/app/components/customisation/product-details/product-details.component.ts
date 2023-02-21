import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/mocks/products';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product?: IProduct ;
  productsList: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private basketService: BasketServiceService
  ) { }

  ngOnInit() {
    this.productsList = this.getProducts();
    this.getProduct();
    console.log(this.product);
  }

  // Récupère la liste des produits
  getProducts() {
    return this.productService.getProducts();
  }

  // Récupère le produit actuel
  getProduct() {

    // permet de récupérer id dans l'URL
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

    //on va vérifier que notre produit existe et qu'il a un id
    this.product = this.productsList.find((productItem) => productItem.id === id);

    // On le retourne
    return this.product;

  }


  // Ajout Cynthia
  //Fonction pour ajouter au panier
  addToBasket() {
    if(!this.product) {
      return 
    }
    const basketProduct: IBasketProduct = {
      product: this.product
    }
    this.basketService.addToBasket(basketProduct);
  }
}
