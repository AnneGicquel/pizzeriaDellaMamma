import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';
import { CustomisationService } from 'src/app/services/customisation/customisation.service';

@Component({
  selector: 'app-ingredients-extras',
  templateUrl: './ingredients-extras.component.html',
  styleUrls: ['./ingredients-extras.component.css']
})
export class IngredientsExtrasComponent {

  @Input() product!: IProduct;

  constructor(
    private customService: CustomisationService
  ) { }

  addOneExtra() {
    this.customService.addOneExtra(0);
  }

  removeOneExtra() {
    this.customService.removeOneExtra(0);
  }

}
