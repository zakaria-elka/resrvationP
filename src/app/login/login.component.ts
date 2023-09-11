import { Component, OnInit ,Input} from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() howedPage: string="";

  constructor() { }


  Vnav:boolean=false;



  ngOnInit(): void {

  if(screen.width<600){
    this.Vnav=true
  }




  }

  showMenu():void{

    this.Vnav=!this.Vnav


  }



}
