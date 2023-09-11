import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ListreservationComponent } from './listreservation/listreservation.component';
import { AppRoutingModule } from './app-routing.module';
import { SavedreseravationComponent } from './savedreseravation/savedreseravation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ListreservationComponent,
    SavedreseravationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {









}
