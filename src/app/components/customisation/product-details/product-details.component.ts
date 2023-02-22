import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/mocks/products';
import { BasketServiceService, IBasketProduct } from 'src/app/services/basketService/basket-service.service';
import { CustomisationService } from 'src/app/services/customisation/customisation.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product?: IProduct ;
  productsList: IProduct[] = [];
  customPrice?: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private basketService: BasketServiceService,
    private customService: CustomisationService
  ) { }

  ngOnInit() {
    this.productsList = this.getProducts();
    this.getCustomProduct();
    this.customPrice = this.product?.price;
  }

  // Récupère la liste des produits
  getProducts() {
    return this.productService.getProducts();
  }

  // Récupère le produit actuel
  getCustomProduct() {
    // permet de récupérer id dans l'URL
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    // fait appel au service customisation pour créer un produit temporaire à customiser
    this.product = this.customService.createCustomProduct(id);
    return this.product;
  }

  // Mets à jour les ingrédients inclus
  toggleIncludedIngredient(index: number) {
    this.customService.unselectIncludedIngredient(index);
  }

  // Ajout extra
  addOneExtra(index: number) {
    this.customService.addOneExtra(index);
    this.customPrice = this.customService.getCustomPrice(this.product!);
  }

  // Retire extra
  removeOneExtra(index: number) {
    this.customService.removeOneExtra(index);
    this.customPrice = this.customService.getCustomPrice(this.product!);
  }
  
  // Fonction pour ajouter au panier
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
