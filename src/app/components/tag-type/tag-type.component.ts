import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-type',
  templateUrl: './tag-type.component.html',
  styleUrls: ['./tag-type.component.css']
})
export class TagTypeComponent {
  buttonIndex=0;
  onClick(index:any){
    this.buttonIndex = index

    console.log("toggle fonctionne");
  }
}
