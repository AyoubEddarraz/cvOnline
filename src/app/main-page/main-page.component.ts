import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active : boolean = false;

  myimg : string = "assets/images/imgpro.jpg";

  linkguideArray : any[] = [
    { lien : "accueil" , namelien : "Accueil" , iconelien : "fas fa-home" } ,
    { lien : "proposMoi" , namelien : "A propos de moi" , iconelien : "fas fa-user" } ,
    { lien : "experience" , namelien : "Experience" , iconelien : "fas fa-briefcase" } ,
    { lien : "formation" , namelien : "Formation" , iconelien : "fas fa-graduation-cap" } ,
    { lien : "connaissanceCompetence" , namelien : "Connaissance & Compétence " , iconelien : "far fa-gem" } ,
    { lien : "certificat" , namelien : "Certificat" , iconelien : "fas fa-certificate" } ,
    { lien : "realisation" , namelien : "Réalisation" , iconelien : "fas fa-code" } ,
    { lien : "divers" , namelien : "Divers" , iconelien : "fas fa-gamepad" } 
  ]

  // Active Guide 

  showguide = () => {
    this.active = ! this.active;
  }

  closeGuide = () => {
    this.active = !this.active;
    window.scrollTo(0 , 600);
  }

}
