import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProposMoiComponent } from './propos-moi/propos-moi.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ConnaissanceComponent } from './connaissance/connaissance.component';
import { CertificatComponent } from './certificat/certificat.component';
import { RealisationComponent } from './realisation/realisation.component';
import { DiversComponent } from './divers/divers.component';


const routes: Routes = [
  { path : "accueil" , component : AccueilComponent } , 
  { path : "proposMoi" , component : ProposMoiComponent } , 
  { path : "experience" , component : ExperienceComponent } , 
  { path : "formation" , component : FormationComponent } , 
  { path : "connaissanceCompetence" , component : ConnaissanceComponent },
  { path : "certificat" , component : CertificatComponent } , 
  { path : "realisation" , component : RealisationComponent } ,
  { path : "divers" , component : DiversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
