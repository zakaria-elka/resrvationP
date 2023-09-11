import { Component, OnInit,Input } from '@angular/core';
import { Reservation } from '../Model/reservation';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.css']
})
export class ListreservationComponent implements OnInit {
  @Input() showedPage: string="";

  constructor(private router: Router) { }

  arrayOfObjects: any[] = [
    { id: 1, Date: '20/09/23', heure: '14h30m',Adresse:"casablanca anfa",Prix:"100dhs"},
    { id: 2, Date: '20/09/23', heure: '16h00m',Adresse:"casablanca anfa",Prix:"100dhs"},
    { id: 3, Date: '20/09/23', heure: '9h00m',Adresse:"casablanca hay hassani",Prix:"100dhs"},
    { id: 4, Date: '20/09/23', heure: '10h30m',Adresse:"casablanca anfa",Prix:"100dhs"},
    { id: 5, Date: '20/09/23', heure: '12h00m',Adresse:"casablanca hay hassani",Prix:"100dhs"},
    { id: 6, Date: '20/09/23', heure: '17h00m',Adresse:"casablanca anfa",Prix:"100dhs"},
    { id: 7, Date: '21/09/23', heure: '14h30m',Adresse:"casablanca anfa",Prix:"100dhs"},
    { id: 8, Date: '21/09/23', heure: '16h00m',Adresse:"casablanca anfa",Prix:"100dhs"},
    { id: 9, Date: '21/09/23', heure: '9h00m',Adresse:"casablanca hay hassani",Prix:"100dhs"},
    { id: 10, Date: '21/09/23', heure: '10h30m',Adresse:"casablanca anfa",Prix:"100dhs"},
    { id: 11, Date: '21/09/23', heure: '12h00m',Adresse:"casablanca hay hassani",Prix:"100dhs"},
    { id: 12, Date: '21/09/23', heure: '17h00m',Adresse:"casablanca anfa",Prix:"100dhs"},
  ];


  Vnav:boolean=false;



  ngOnInit(): void {

  if(screen.width<600){
    this.Vnav=true
  }




  }

  showMenu():void{

    this.Vnav=!this.Vnav


  }

SaveData(param:Reservation){

  const serializedObject = JSON.stringify(param);
  this.router.navigate(['/reservation'], { queryParams: { data: serializedObject } });

}




}
