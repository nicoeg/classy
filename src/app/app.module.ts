import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { DataService } from './data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsletterSignupComponent } from './component/newsletter-signup/newsletter-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SiteHeaderComponent,
    FrontpageComponent,
    SliderComponent,
    NewsletterSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
