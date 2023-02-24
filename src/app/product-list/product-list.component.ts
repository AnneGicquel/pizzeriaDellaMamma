import { Component } from '@angular/core';
import { PRODUCTS, TagType } from '../mocks/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //  tags:TagType[] = ["tomato" , "white" , "drink" , "veggie" , "dessert"];

  // //  objet, filtrer , passer ses donnees dans un tableau.
  // // mon New Data (dans)
  //  getProducts(tags:TagType) {
  //   if(this.tags.length === 1){
  //     return PRODUCTS;
  //   }else{
  //     return PRODUCTS.filter((product)=>{
  //       return
  //     })
  //   }
  //  }


}
