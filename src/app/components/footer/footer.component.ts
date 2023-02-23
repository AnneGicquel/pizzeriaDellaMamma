import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public router: Router,){}

  // // initialisation à true
  // isParagraphVisible: boolean = true;

  // hideFooter(){
  //   if (this.router.url.endsWith("/basket")) {
  //     this.isParagraphVisible = false;
  // }


  // hideFooter(){
  //   const getUrlBasket = this.router.url.endsWith("/basket");
  //   return getUrlBasket? 'test1':'sos'
  // }

}

