import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.css']
})
export class RealisationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.switchProject();
    this.moreRealisation =  this.allrealistation[0];
  }

  url : string = "assets/images/imgRealisation/";

  angualarProject = [];
  jsProject = [];

  activeCase : string = "all";

  switchProject = () => {
    for(let i = 0 ; i < this.allrealistation.length ; i++){
      if(this.allrealistation[i].target == "js"){
        this.jsProject.push(this.allrealistation[i]);
      }else{
        this.angualarProject.push(this.allrealistation[i]);
      }
    } 
  }

  moreRealisation = {
    name :  "" ,
    desc : "" ,
    target : "" ,
    realisePar : "" ,
    picture : [] ,
    technologie : "" ,
    lienGithub : "" ,
    lienYoutube : "" ,
  }
  
  allrealistation : any[] = [  
    {
      name :  "Gestionnaire des lien" ,
      desc : "le role de ce App de gestionner les liens et aussi , pour resolé une probleme exsiste dans le browser, chaque fois je sauvgardé une lien dans le navigateur je trouve une défficilité pour trouver et pour sa j'ai l'idée de fait une app qui organisé les lien chaque lien dans une list spécifique, par Exmeple : les sites d'icone dans une list lorsque je veux une site de icone je cherche directement dans la list de icone. " ,
      target : "js" ,
      realisePar : "Ayoub Eddarraz" ,
      picture : [this.url+"1.png" , this.url+"2.png" , this.url+"3.png" , this.url+"4.png"] ,
      technologie : "html5 , css3 , animation , javascript , Es6" ,
      lienGithub : "https://www.google.com/" ,
      lienYoutube : "https://www.google.com/" ,
    } , 

    {
      name :  "ToDo List App" ,
      desc : "ToDo list app pour completer les taches de jour , idéé moi beaucoup comme dévellopeur, deux mode possible normal mode , dark mode. l'ajoute dans ce list c'est que tu as une pop-up pour ajouter une tache et auusi une alarme aprés une temps toi qui choisser." ,
      target : "js" ,
      realisePar : "Ayoub Eddarraz" ,
      picture : [this.url+"5.png" , this.url+"6.png" , this.url+"7.png" , this.url+"8.png" , this.url+"9.png" , this.url+"10.png" , this.url+"11.png" ] ,
      technologie : "html5 , css3 , animation , javascript , Es6" ,
      lienGithub : "https://www.google.com/" ,
      lienYoutube : "https://www.google.com/" ,
    } ,

    
    {
      name :  "Objectives Calculator" ,
      desc : "le role de ce app de calculer le temps possible pour attendre une objectif et calculer combien d'argent tu dois save  pour attendre l'objectif , et tout sa attravaire le salaire et et les frais de mois comme immoblier et transport , L'app contient une documentation dynamique explique chaque champs , support dark mode" ,
      target : "js" ,
      realisePar : "Ayoub Eddarraz" ,
      picture : [this.url+"12.png" , this.url+"13.png" , this.url+"14.png" , this.url+"15.png" , this.url+"16.png" , this.url+"17.png"] ,
      technologie : "html5 , css3 , animation , javascript , Es6" ,
      lienGithub : "https://www.google.com/" ,
      lienYoutube : "https://www.google.com/" ,
    } ,

    {
      name :  "Drogri.com" ,
      desc : "site vitrine pour afficher les matterielles d'une drogri." ,
      target : "angular" ,
      realisePar : "Ayoub Eddarraz" ,
      picture : [this.url+"18.png" , this.url+"19.png" , this.url+"20.png" , this.url+"21.png"] ,
      technologie : "Angular 9 , Bootstrap 4 Twitter" ,
      lienGithub : "https://www.google.com/" ,
      lienYoutube : "https://www.google.com/" ,
    } ,


    {
      name :  "Budget Calculator" ,
      desc : "calculer le budget , le role de ce App de calculer 'income' et 'expenses' , et donne la posibilité de modifier et supprimer les element ." ,
      target : "angular" ,
      realisePar : "Ayoub Eddarraz" ,
      picture : [this.url+"22.png" , this.url+"23.png" , this.url+"24.png" , this.url+"25.png"] ,
      technologie : "Angular 9 , Bootstrap 4 Twitter" ,
      lienGithub : "https://www.google.com/" ,
      lienYoutube : "https://www.google.com/" ,
    } ,

    {
      name :  "Cv online" ,
      desc : "Site vitrine pour afficher tout mes compétences , et mon carriere et ma formation acadimique et aussi mes projects réalisé et les plus détails de chaque project." ,
      target : "angular" ,
      realisePar : "Ayoub Eddarraz" ,
      picture : [this.url+"27.png" , this.url+"28.png" , this.url+"29.png" , this.url+"30.png" , this.url+"31.png" ] ,
      technologie : "Angular 9 , Bootstrap 4 Twitter" ,
      lienGithub : "https://www.google.com/" ,
      lienYoutube : "https://www.google.com/" ,
    }

  ]


  AddTomodal = (res) => {
    this.moreRealisation = res;
    this.closeModal = false;
  }

  closeModal : boolean = true;

  closeModalFun = () => {
    this.closeModal = true;
  }

}
