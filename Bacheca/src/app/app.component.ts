import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Utente}from './utente';
import {Utenti} from './mock-utenti';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bacheca';
   myForm: FormGroup;
   utenti= Utenti;
   show: boolean=false;
    constructor(fb:FormBuilder)
    {
      this.myForm=fb.group({
          'nome':['', Validators.required],
          'cognome':['', Validators.required],
          'email':['', Validators.required],
          'user':['', Validators.required],
          'password':['', Validators.required],

      })
    }

     onSubmit(value: string): void {
    this.show=true;
    let utente: Utente = new Utente();
    utente.nome = this.myForm.controls['nome'].value;
    utente.cognome = this.myForm.controls['cognome'].value;
    utente.user = this.myForm.controls['user'].value;
    utente.password = this.myForm.controls['password'].value;
    utente.email = (this.myForm.controls['email'].value);


    this.utenti.push(utente);
  }
}
