import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BachecaCommentiComponent } from './bacheca-commenti/bacheca-commenti.component';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommentoComponent } from './commento/commento.component';
import { ViewUtentiComponent } from './view-utenti/view-utenti.component';
import { NewObjectComponent } from './new-object/new-object.component';
import { ObjectsListComponent } from './objects-list/objects-list.component';
import { UserObjectsComponent } from './user-objects/user-objects.component';


@NgModule({
  declarations: [
    AppComponent,
    BachecaCommentiComponent,
    CommentoComponent,
    ViewUtentiComponent,
    NewObjectComponent,
    ObjectsListComponent,
    UserObjectsComponent,

  ],
  imports: [
    BrowserModule,NgbModule,FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
