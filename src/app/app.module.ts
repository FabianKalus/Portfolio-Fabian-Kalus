import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderImprintComponent } from './header-imprint/header-imprint.component';
import { SidebarImprintComponent } from './sidebar-imprint/sidebar-imprint.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SkillsComponent,
    PortfolioComponent,
    AboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    SidebarComponent,
    ImprintComponent,
    HomeComponent,
    HeaderImprintComponent,
    SidebarImprintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
