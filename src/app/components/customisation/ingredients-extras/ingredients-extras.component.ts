import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';

@Component({
  selector: 'app-ingredients-extras',
  templateUrl: './ingredients-extras.component.html',
  styleUrls: ['./ingredients-extras.component.css']
})
export class IngredientsExtrasComponent {

  @Input() product!: IProduct;
  @Output() addOne = new EventEmitter();
  @Output() removeOne = new EventEmitter();

  rowRemoveToDisable: number[] = [];
  rowAddToDisable: number[] = [];

  ngOnInit() {
    this.sortExtraByAlpha();
    this.initButtonStyle();
  }

  initButtonStyle() { 
    // Une boucle pour initialiser tous les boutons - à [disabled]=true
    for (let i = 0; i < this.product.extras.length; i++) {
      this.rowRemoveToDisable.push(i);
    }
  }

  addOneExtra(input: number) {
    this.addOne.emit(input);
    this.disableButton(input);
  }

  removeOneExtra(input: number) {
    this.removeOne.emit(input);
    this.disableButton(input);
  }

  disableButton(input: number) {
    let maxQuantity = this.product.extras[input].maxQuantity;
    let currentQuantity = this.product.extras[input].quantity;

    if (currentQuantity <= 0) {
      this.rowRemoveToDisable[input] = input;
      this.rowAddToDisable[input] = 3000;

    } else if (currentQuantity < maxQuantity) {
      this.rowRemoveToDisable[input] = 3000;
      this.rowAddToDisable[input] = 3000;

    } else if (currentQuantity >= maxQuantity) {
      this.rowRemoveToDisable[input] = 3000;
      this.rowAddToDisable[input] = input;

    }
  }

  sortExtraByAlpha() {
    this.product.extras.sort(function (a, b) {
      return a.ingredient.title.localeCompare(b.ingredient.title);
    });
  }


}
