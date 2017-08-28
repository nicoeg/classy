import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from "./pages/product/product.component";
import { FrontpageComponent } from "./pages/frontpage/frontpage.component";

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    data: {
      transparentHeader: 'true'
    }
  },
  {
    path: '',
    component: FrontpageComponent,
    data: {
      transparentHeader: 'true'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
