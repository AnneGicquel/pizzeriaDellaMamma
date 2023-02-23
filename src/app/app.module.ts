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
import { TableNumberFormComponent } from './components/table-number-form/table-number-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BasketProductCardComponent } from './components/basket/basket-product-card/basket-product-card.component';
import { TagTypeComponent } from './components/tag-type/tag-type.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CustomisationComponent,
    BasketComponent,
    ProductDetailsComponent,
    IngredientsIncludedComponent,
    IngredientsExtrasComponent,
    SummaryComponent,
    TableNumberFormComponent,
    ProductCardComponent,
    BasketProductCardComponent,
    TagTypeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
