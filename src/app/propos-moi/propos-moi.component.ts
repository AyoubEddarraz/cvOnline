import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propos-moi',
  templateUrl: './propos-moi.component.html',
  styleUrls: ['./propos-moi.component.css']
})
export class ProposMoiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoPersonel)
  }
  
  infoPersonel = { 
      info1 : [{ info : "Date d'anniversaire" , details : "2001-02-08" } , { info : "Age" , details : "20 ans" } , { info : "Ville" , details : "casablanca, Maroc" } , { info : "Freelance" , details : "Disponible" } ]  ,
      info2 : [{ info : "Diplôme" , details : "technicien spécialisé en développement informatique" } , { info : "Email" , details : "ayoub.eddarraz.di@gmail.com" } ]
    }

}
