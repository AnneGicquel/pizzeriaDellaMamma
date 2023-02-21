import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';
import { CustomisationService } from 'src/app/services/customisation/customisation.service';

@Component({
  selector: 'app-ingredients-extras',
  templateUrl: './ingredients-extras.component.html',
  styleUrls: ['./ingredients-extras.component.css']
})
export class IngredientsExtrasComponent {

  @Input() product!: IProduct;
  @Output() addOne = new EventEmitter();
  @Output() removeOne = new EventEmitter();

  constructor(
    private customService: CustomisationService
  ) { }

  addOneExtra(input: number) {
    this.addOne.emit(input);
  }

  removeOneExtra(input: number) {
    this.removeOne.emit(input);
  }

}
