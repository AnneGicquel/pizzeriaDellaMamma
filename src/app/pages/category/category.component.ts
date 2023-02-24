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
  searchKey:string="";
  // public filterTags:any;
  public filterCategory:any;
  public searchTerm :string='';

  constructor(private productService : ProductService){}

  ngOnInit() : void{
    this.products = this.getProducts(); 
    // this.tags = this.filterCategory;
    // .subscribe((res:any)=>{
    //   this.products = res;

    //   this.products.forEach((a:any)=>{
    //     Object.assign(a,{quantity:1, total:a.price});
    //   })
    // })

  }

  getProducts(){
    return this.productService.getProducts();

  }


  filter(tags:string){
    this.filterCategory =this.products.filter((a:any)=>{
      if(a.tags == tags || tags ==''){
        return a;
      }
    })

  }

  // search(event:any){
  //   this.searchTerm= (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.productService.search.next(this.searchTerm);
  // }


}
