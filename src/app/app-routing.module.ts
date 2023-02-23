import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomisationComponent } from './pages/customisation/customisation.component';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "category",
    component: CategoryComponent
  },
  {
    path: "customisation/:id",
    component: CustomisationComponent
  },
  {
    path: "basket",
    component: BasketComponent
  },
  {
    path: "summary",
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
