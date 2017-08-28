import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SiteHeaderComponent,
    FrontpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
