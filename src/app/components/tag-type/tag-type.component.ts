import { Component } from '@angular/core';
import { IProduct, ProductCategoryType, PRODUCTS, TagType } from 'src/app/mocks/products';

@Component({
  selector: 'app-tag-type',
  templateUrl: './tag-type.component.html',
  styleUrls: ['./tag-type.component.css']
})
export class TagTypeComponent {
  product:IProduct[]=PRODUCTS;
  // opt : TagType[];

  filteredProducts=[];


  // buttonIndex=0;
  // onClick(index:any){
  //   this.buttonIndex = index
  //   console.log("toggle fonctionne");
  // options : TagType;
  



  filter(data: number[]){
    if (data.length === 0) {
      // this.filteredProducts = this.Tag;
      return;
  }

  }

}