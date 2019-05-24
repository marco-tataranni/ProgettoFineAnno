import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BachecaCommentiComponent } from './bacheca-commenti/bacheca-commenti.component';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommentoComponent } from './commento/commento.component';

@NgModule({
  declarations: [
    AppComponent,
    BachecaCommentiComponent,
    CommentoComponent
  ],
  imports: [
    BrowserModule,NgbModule,FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
