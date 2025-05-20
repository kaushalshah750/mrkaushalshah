import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './shared/hero/hero.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExperienceComponent } from './shared/experience/experience.component';
import { ProjectsComponent } from './shared/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './shared/home/home.component';
import { ServicesComponent } from './shared/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './shared/blogs/blogs.component';
import { ProjectCardComponent } from './shared/projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ServicesComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
