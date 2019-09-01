import { Component, OnInit, Input  } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Oggetto}from '../oggetto';
import {Oggetti} from '../mock-oggetti';
@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
  myForm: FormGroup;
  @Input() oggetti= Oggetti;
  @Input() defUser:string;
  constructor(fb:FormBuilder)
    {
      this.myForm=fb.group({
          'nome':['', Validators.required],
          'descrizione':['', Validators.required],
          'prezzo':['', Validators.required],
          'link':['', Validators.required],


      })
    }
     onSubmit(value: string): void {

    let oggetto: Oggetto = new Oggetto();

    oggetto.nome = this.myForm.controls['nome'].value;
    oggetto.descrizione = this.myForm.controls['descrizione'].value;
    oggetto.prezzo =this.myForm.controls['prezzo'].value;
    oggetto.link = this.myForm.controls['link'].value;
    oggetto.proprietario = this.defUser;


    this.oggetti.push(oggetto);


  }


  ngOnInit() {
  }

}
