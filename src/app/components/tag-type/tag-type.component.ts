import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-tag-type',
  templateUrl: './tag-type.component.html',
  styleUrls: ['./tag-type.component.css']
})

export class TagTypeComponent {
  products:IProduct[]=PRODUCTS;
  tags:IProduct[]=[];

  public totalItem : number = 0;
  public searchTerm : string ='';
  //   
  public filterTags:any;
  public filterCategory:any;

  ngOnInit(){
    this.productService.getProducts()
    // subscribe(res=>{
    //   this.totalItem = res.length;
    // })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }

  constructor(private productService : ProductService){};

  filter(tags:string){
    this.filterCategory =this.products.filter((a:any)=>{
      if(a.products == this.products){
        return a;
      }
    })

  }

}