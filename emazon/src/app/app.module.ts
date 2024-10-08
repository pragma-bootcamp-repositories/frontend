import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavButtonComponent } from './atomic/atom/nav-button/nav-button.component';
import { NavbarComponent } from './atomic/organism/navbar/navbar.component';
import { DropdownButtonComponent } from './atomic/molecule/dropdown-button/dropdown-button.component';
import { TextLinkComponent } from './atomic/atom/text-link/text-link.component';
import { ProductCardComponent } from './atomic/molecule/product-card/product-card.component';
import { HeaderComponent } from './atomic/organism/header/header.component';
import { FooterComponent } from './atomic/organism/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    NavbarComponent,
    DropdownButtonComponent,
    TextLinkComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
