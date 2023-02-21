import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomisationComponent } from './pages/customisation/customisation.component';
import { BasketComponent } from './pages/basket/basket.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TagTypeComponent } from './components/tag-type/tag-type.component';
import { TableNumberFormComponent } from './components/table-number-form/table-number-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CustomisationComponent,
    BasketComponent,
    SummaryComponent,
    TagTypeComponent,
    SummaryComponent,
    TableNumberFormComponent
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
