import { Component } from '@angular/core';
import { TagType } from 'src/app/mocks/category';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { ProductService } from 'src/app/services/products/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent {
  products : IProduct[]=[];
  
  tags:TagType[] = ["tomato" , "white" , "drink" , "veggie" , "dessert"];
  veggie = this.tags.includes('tomato') 
  searchKey:string="";
  // public filterTags:any;
  public filterCategory : IProduct[]=[];
  public searchTerm :string='';

  constructor(private productService : ProductService){}

  ngOnInit() : void{
    this.products = this.getProducts(); 
    this.filterCategory = this.getProducts(); 
    console.log(this.products)
  }

  getProducts(){
    return this.productService.getProducts();

  }
  filter(tags:string){
    this.filterCategory =this.products.filter((a:any)=>{
      if(a.tags == tags || tags ==''){
        return a;
      }
      if(a.tags.includes("veggie")){
        
      }
    })
  }
}

// if(a.tags.includes("veggie")){
//   return a;
// }