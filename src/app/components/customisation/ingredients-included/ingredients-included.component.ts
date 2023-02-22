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

  checkboxIsNotChecked: number = 2000;

  toggleIncludedIngredient(input: number) {
    this.toggle.emit(input);

    if(this.checkboxIsNotChecked) {
      this.checkboxIsNotChecked = input;
    } else {
      this.checkboxIsNotChecked = 2000;
    }

  }

}
