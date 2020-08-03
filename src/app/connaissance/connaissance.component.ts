import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaissance',
  templateUrl: './connaissance.component.html',
  styleUrls: ['./connaissance.component.css']
})
export class ConnaissanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  competenceEtConnaissance : any[] = [
    { icone : "fas fa-file-code" , nameCompetence : "Langage de programmation" , genreCompetence : ["javascript" , " typescript" , " python"] } ,
    { icone : "fas fa-brush" , nameCompetence : "Langage de Markup & style" , genreCompetence : ["Html5" , " Css3" , " animation" , " MediaQuery"] } ,
    { icone : "fas fa-icons" , nameCompetence : "icone" , genreCompetence : ["fontAwesome 4/5"] } ,
    { icone : "fa fa-bolt" , nameCompetence : "Framework" , genreCompetence : ["Angular v2/9" , " Boostrap 3/4"]} ,
    { icone : "fab fa-github-alt" , nameCompetence : "Gestion de Versions" , genreCompetence : [ "GIT", " GITHUB"] } ,
    { icone : "fas fa-image" , nameCompetence : "Editeur Graphique" , genreCompetence : ["Photoshop CS6/9" , " Adobe Xd"] } ,
    { icone : "fas fa-laptop-code" , nameCompetence : "Text Editeur" , genreCompetence : ["Visual studio code" , " brackets" , " Sublime Text"] } ,
    { icone : "fas fa-code-branch" , nameCompetence : "Autre" , genreCompetence : ["Firebase" , " Json" , " Es6" , " regulare Ex"]}
  ]

}
