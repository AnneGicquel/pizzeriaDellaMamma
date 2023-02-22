import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';
import { ProductService } from 'src/app/services/products/product.service';

@Injectable({
  providedIn: 'root'
})
export class CustomisationService {

  customProduct?: IProduct;
  customPrice?: number = this.customProduct?.price;

  constructor(private productService: ProductService) { }

  // Créer un produit temporaire que l'on va customiser
  createCustomProduct(id: number){
    this.customProduct = this.productService.getProduct(id);
    return this.customProduct
  }

  // Sélectionner / désélectionner un ingrédient inclus, va modifier le produit temporaire
  unselectIncludedIngredient(indexIngredient: number) {

    if(!this.customProduct) return

    let isSelected = this.customProduct.includedIngredients[indexIngredient].isSelected;

    if(isSelected) {
      this.customProduct.includedIngredients[indexIngredient].isSelected = false;
    } else if(!isSelected) {
      this.customProduct.includedIngredients[indexIngredient].isSelected = true;
    }

  }

  // Ajouter un extra
  addOneExtra(indexIngredient: number) {

    if(!this.customProduct) return

    let maxQuantity = this.customProduct.extras[indexIngredient].maxQuantity;
    let quantity = this.customProduct.extras[indexIngredient].quantity;

    // Vérifier si l'on a atteint la quantité max
    if(quantity < maxQuantity) {
      // Ajoute 1
      this.customProduct.extras[indexIngredient].quantity ++

    }

  }

  // Retirer un extra
  removeOneExtra(indexIngredient: number) {

    if(!this.customProduct) return

    let quantity = this.customProduct.extras[indexIngredient].quantity;

    if(quantity > 0) {
    // Retire 1
    this.customProduct.extras[indexIngredient].quantity --

    }

  }

  getCustomPrice() {

    let additionnalPrice: number = 0;
    this.customPrice = this.customProduct?.price;

    if(!this.customProduct) return

    for(let i = 0 ; i < this.customProduct!.extras.length ; i++) {

      if(this.customProduct.extras[i].quantity > 0) {

        additionnalPrice = this.customProduct?.extras[i].additionalPrice;
        this.customPrice = this.customPrice! + additionnalPrice;
        
      }
      
    }

    return this.customPrice
  }



}
