import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';

@Component({
  selector: 'app-ingredients-extras',
  templateUrl: './ingredients-extras.component.html',
  styleUrls: ['./ingredients-extras.component.css']
})
export class IngredientsExtrasComponent {

  @Input() product!: IProduct;

}
