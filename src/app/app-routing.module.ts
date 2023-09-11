import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListreservationComponent } from './listreservation/listreservation.component';
import { SavedreseravationComponent } from './savedreseravation/savedreseravation.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'list',component:ListreservationComponent},
  {path:'reservation',component:SavedreseravationComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
