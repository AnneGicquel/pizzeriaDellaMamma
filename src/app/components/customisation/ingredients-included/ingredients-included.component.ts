import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';
import { CustomisationService } from 'src/app/services/customisation/customisation.service';

@Component({
  selector: 'app-ingredients-included',
  templateUrl: './ingredients-included.component.html',
  styleUrls: ['./ingredients-included.component.css']
})
export class IngredientsIncludedComponent {

  @Input() product!: IProduct;
  @Output() toggle = new EventEmitter();

  constructor(
    private customService: CustomisationService
  ) { }

  toggleIncludedIngredient(input: number) {
    this.toggle.emit(input);
  }

}
