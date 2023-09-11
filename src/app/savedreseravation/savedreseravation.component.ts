import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../Model/reservation';

@Component({
  selector: 'app-savedreseravation',
  templateUrl: './savedreseravation.component.html',
  styleUrls: ['./savedreseravation.component.css']
})


export class SavedreseravationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  reservation:Reservation= { id: 0, Date: '', heure: '',Adresse:"",Prix:""}


  Vnav:boolean=false;



  ngOnInit(): void {

  if(screen.width<600){
    this.Vnav=true
  }

  this.route.queryParams.subscribe(params => {
    if (params['data']) {
      const deserializedObject = JSON.parse(params['data']);
      this.reservation=deserializedObject
    }
  });



  }

  showMenu():void{

    this.Vnav=!this.Vnav


  }


}
