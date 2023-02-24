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
  tagsFormArray: Array<any> = [];


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

  filterAll() {
    const allTags = this.getTags();
    this.filter(allTags);
  }

  getTags() {
    let allTags = [];
    const checkboxValues = this.allCheckbox.value;
    for (let key in checkboxValues) {
      if (checkboxValues.hasOwnProperty(key) && checkboxValues[key] === true) {
        allTags.push(key);
      }
    }
    console.log(allTags);

    return allTags;
  }

  filter(tags: string[]) {
    this.filterCategory = this.products.filter((product: any) => {
      // Vérifier si le produit a au moins un des tags de l'array tags
      return tags.some((tag: string) => product.tags.includes(tag));
    });

    if (tags.length === 0) {
      this.filterCategory = this.products;
    }

  }
}

