import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProposMoiComponent } from './propos-moi/propos-moi.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ConnaissanceComponent } from './connaissance/connaissance.component';
import { CertificatComponent } from './certificat/certificat.component';
import { RealisationComponent } from './realisation/realisation.component';
import { DiversComponent } from './divers/divers.component';
import { CatdescPipe } from './catdesc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AccueilComponent,
    ProposMoiComponent,
    ExperienceComponent,
    FormationComponent,
    ConnaissanceComponent,
    CertificatComponent,
    RealisationComponent,
    DiversComponent,
    CatdescPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
