import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';

const appRoutes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'fruits',
    component: FruitsComponent,
  },
  {
    path: 'vegetables',
    component: VegetablesComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
