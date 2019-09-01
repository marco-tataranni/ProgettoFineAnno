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
    logForm: FormGroup;
    utenti= Utenti;
    show: boolean=false;
    show1: boolean=false;
    defUser:string="";
    show2: boolean=false;

    constructor(fb:FormBuilder)
    {
      this.myForm=fb.group({
          'nome':['', Validators.required],
          'cognome':['', Validators.required],
          'email':['', Validators.required],
          'user':['', Validators.required],
          'password':['', Validators.required],

      })
      this.logForm=fb.group({
        'user':['', Validators.required],
        'password':['', Validators.required],
      })
    }

     onSubmit(value: string): void {
    this.show=true;
    let utente: Utente = new Utente();

    utente.nome = this.myForm.controls['nome'].value;
    utente.cognome = this.myForm.controls['cognome'].value;
    utente.user =this.myForm.controls['user'].value;
    utente.password = this.myForm.controls['password'].value;
    utente.email = (this.myForm.controls['email'].value);


    this.utenti.push(utente);
    this.defUser=this.myForm.controls['user'].value;

  }

   logSubmit() :boolean {
     if(this.logForm.valid){
       for(let i of this.utenti){
         if(this.logForm.controls['user'].value == i.user){
           if(this.logForm.controls['password'].value == i.password){
               this.show=true;
               this.show1=false;
               this.defUser=i.user;
               break;
           }
           else{
              this.show2=true;
           }
         }else{
            this.show2=true;
         }
       }
     }
     return false;
   }

  showlogin():boolean{
    this.show1=true;
    return false;
  }
  showregistrazione():boolean{
    this.show1=false;
    return false;
  }
  logout():boolean{
    this.show1=true;
    this.show=false;
    this.defUser="";
    return false;
  }
}
