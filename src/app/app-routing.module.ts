import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FrontpageComponent } from './pages/frontpage/frontpage.component'
import { NewCollectionComponent } from './pages/new-collection/new-collection.component'
import { ProductpageComponent } from './pages/productpage/productpage.component'

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductpageComponent,
    data: {
      transparentHeader: 'true'
    }
  },
  {
    path: 'new-collection',
    component: NewCollectionComponent,
    data: {
      transparentHeader: true
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
