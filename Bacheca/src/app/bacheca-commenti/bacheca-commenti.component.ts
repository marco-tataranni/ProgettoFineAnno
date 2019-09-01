import { Component, OnInit, Input } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Post}from '../post';
import {Posts} from '../mock-post';
import {Oggetti} from '../mock-oggetti';
import {Oggetto} from '../oggetto';

@Component({
  selector: 'app-bacheca-commenti',
  templateUrl: './bacheca-commenti.component.html',
  styleUrls: ['./bacheca-commenti.component.css']
})
export class BachecaCommentiComponent implements OnInit {
  @Input() defUser:string;
  @Input() oggetti= Oggetti;
   myForm: FormGroup;
   posts=Posts;

    constructor(fb:FormBuilder)
    {
      this.myForm=fb.group({
          'data':['', Validators.required],
          'titolo':['', Validators.required],
          'testo':['', Validators.required],
          'oggetto':['',Validators.required],
          'numero':['',Validators.required],


      })
    }

     onSubmit(value: string): void {

    let post: Post = new Post();
    post.dataInsrimento = this.myForm.controls['data'].value;
    post.titolo = this.myForm.controls['titolo'].value;
    post.testo = this.myForm.controls['testo'].value;
    post.userName = this.defUser;
    post.numero = this.myForm.controls['numero'].value;



    this.posts.push(post);
     for(let i of this.oggetti){
         if(this.myForm.controls['oggetto'].value == i.nome){
           let oggetto: Oggetto= new Oggetto();
            oggetto.postAssociato = this.myForm.controls['numero'].value;




    this.posts.push(post);

         }
       }
     }

  controllo(a: string ):boolean{
    if(a==this.defUser){
      return true;
    }else{
      return false;
    }
  }
  ngOnInit() {
  }

}
