import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { DataService } from './services/data.service'
import { ProductService } from './services/product.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';

import { ProductComponent } from './components/product/product.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsletterSignupComponent } from './component/newsletter-signup/newsletter-signup.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ProductpageComponent,
    ProductComponent,
    SiteHeaderComponent,
    SliderComponent,
    NewsletterSignupComponent,
    ProductGridComponent,
    FooterComponent,
    NewCollectionComponent,
    SelectFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ DataService, ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
