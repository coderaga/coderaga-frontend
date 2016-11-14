import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar.component';
import { AboutComponent } from './about.component';
import { ServicesComponent } from './services.component';
import { ContactComponent } from './contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoderagaComponent } from './coderaga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PortfolioComponent,
    CoderagaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
