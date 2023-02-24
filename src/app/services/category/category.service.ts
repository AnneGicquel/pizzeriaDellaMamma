import { Injectable } from '@angular/core';
import { IProductsByCategory, PRODUCTS, TagType } from 'src/app/mocks/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getProductsByCategory():IProductsByCategory[]{
    return PRODUCTS;
    // .pipe(map((res:any)=>
    // return:res;
  }



    // 
    tags:TagType[] = ["tomato" , "white" , "drink" , "veggie" , "dessert"];



    //  getProductsByTags(tags:TagType) {
    //   if(this.tags.length === 1){
    //     return PRODUCTS;
    //   }else{
    //     return PRODUCTS.filter((product)=>{
    //       return
    //     })
    //   }
    //  }
  

}
