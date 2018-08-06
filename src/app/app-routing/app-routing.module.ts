import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { UpdateComponent } from '../update/update.component';
import { HomeComponent } from '../home/home.component';
import { AddComponent } from '../add/add.component';
import { ProductsComponent } from '../products/products.component';


const appRoutes: Routes = [
  {
    path: "update",
    component: UpdateComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}