import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomisationComponent } from './pages/customisation/customisation.component';
import { BasketComponent } from './pages/basket/basket.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ProductDetailsComponent } from './components/customisation/product-details/product-details.component';
import { IngredientsIncludedComponent } from './components/customisation/ingredients-included/ingredients-included.component';
import { IngredientsExtrasComponent } from './components/customisation/ingredients-extras/ingredients-extras.component';
import { TagTypeComponent } from './components/tag-type/tag-type.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CustomisationComponent,
    BasketComponent,
    SummaryComponent,
    TagTypeComponent,
    ProductDetailsComponent,
    IngredientsIncludedComponent,
    IngredientsExtrasComponent,
    TagTypeComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
