import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.css']
})
export class DiversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  divers : any[] = [
    { icone : "fas fa-suitcase-rolling" , nameCompetence : "Voyage"} ,
    { icone : "fas fa-running" , nameCompetence : "Sports" } ,
    { icone : "fas fa-gamepad" , nameCompetence : "gaming"}
  ]

}
