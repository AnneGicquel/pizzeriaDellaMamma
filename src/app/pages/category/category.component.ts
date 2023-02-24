import { Component } from '@angular/core';
import { TagType } from 'src/app/mocks/category';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { ProductService } from 'src/app/services/products/product.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent {
  products: IProduct[] = [];
  allCheckbox!: FormGroup;

  tags: TagType[] = ["tomato", "white", "drink", "veggie", "dessert"];
  veggie = ["veggie"]
  searchKey: string = "";
  // public filterTags:any;
  public filterCategory: IProduct[] = [];
  public searchTerm: string = '';

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.products = this.getProducts();
    this.filterCategory = this.getProducts();
    console.log(this.products)

    this.allCheckbox = new FormGroup({
      tomato: new FormControl(false),
      white: new FormControl(false),
      veggie: new FormControl(false),
      dessert: new FormControl(false),
      drink: new FormControl(false),
    });
  }

  getProducts() {
    return this.productService.getProducts();

  }

  filter(tags: string) {
    this.filterCategory = this.products.filter((a: any) => {
      if (a.tags.includes(tags) || tags == '') {
        return a;
      }
    })
    let isChecked = this.allCheckbox.value;
    console.log(isChecked);
  }
}
