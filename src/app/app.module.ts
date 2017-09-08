import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { DataService } from './services/data.service'
import { ProductService } from './services/product.service'
import { ShoppingBagService } from './services/shopping-bag.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';

import { ProductComponent } from './components/product/product.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsletterSignupComponent } from './components/newsletter-signup/newsletter-signup.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

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
    ShoppingBagComponent,
    ContactComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DataService, ProductService, ShoppingBagService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
