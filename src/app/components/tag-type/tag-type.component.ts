import { Component } from '@angular/core';
import { IProduct, ProductCategoryType, PRODUCTS, TagType } from 'src/app/mocks/products';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-tag-type',
  templateUrl: './tag-type.component.html',
  styleUrls: ['./tag-type.component.css']
})
export class TagTypeComponent {
  product:IProduct[]=PRODUCTS;

  filteredProducts=[];
  // productOptions:any[]

  // buttonIndex=0;
  // onClick(index:any){
  //   this.buttonIndex = index
  //   console.log("toggle fonctionne");
  // options : TagType;

  // constructor(private primeNGConfig : PrimeNGConfig){
  //   this.productOptions = [
  //     {pseudo:'opt1', value:1},
  //     {pseudo:'opt1', value:2},
  //     {pseudo:'opt1', value:3},
  //   ];
  // }

  // ngOnInit(){
  //   this.primeNGConfig.ripple = true;
  // }

  // filter(data: number[]){
  //   if (data.length === 0) {
  //     this.filteredProducts = this.Tag;
  //     return;
  // }

  // }

}