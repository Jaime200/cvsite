import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

import { EstudioComponent } from './estudio/estudio.component';
import { AcercaComponent } from './acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ExperienciaComponent,
    
    EstudioComponent,
    
    AcercaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
