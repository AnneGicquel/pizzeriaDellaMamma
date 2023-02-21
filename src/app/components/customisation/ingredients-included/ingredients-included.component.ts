import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';

@Component({
  selector: 'app-ingredients-included',
  templateUrl: './ingredients-included.component.html',
  styleUrls: ['./ingredients-included.component.css']
})
export class IngredientsIncludedComponent {

  @Input() product!: IProduct;

}
