import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';

@Component({
  selector: 'app-ingredients-included',
  templateUrl: './ingredients-included.component.html',
  styleUrls: ['./ingredients-included.component.css']
})
export class IngredientsIncludedComponent {

  @Input() product!: IProduct;
  @Output() toggle = new EventEmitter();

  checkboxIsNotChecked: number[] = [];

  ngOnInit() {
    this.sortIngredientsByAlpha();
  }

  toggleIncludedIngredient(input: number) {
    this.toggle.emit(input);

  }

  sortIngredientsByAlpha() {
    this.product.includedIngredients.sort(function (a, b) {
      return a.ingredient.title.localeCompare(b.ingredient.title);
    });
  }

}
