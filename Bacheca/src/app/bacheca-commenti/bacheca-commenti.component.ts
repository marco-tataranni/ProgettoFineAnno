import { Component, OnInit, Input } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Post}from '../post';
import {Posts} from '../mock-post';
import {Oggetti} from '../mock-oggetti';
@Component({
  selector: 'app-bacheca-commenti',
  templateUrl: './bacheca-commenti.component.html',
  styleUrls: ['./bacheca-commenti.component.css']
})
export class BachecaCommentiComponent implements OnInit {
  @Input() defUser:string;

   myForm: FormGroup;
   posts=Posts;

    constructor(fb:FormBuilder)
    {
      this.myForm=fb.group({
          'data':['', Validators.required],
          'titolo':['', Validators.required],
          'testo':['', Validators.required],



      })
    }

     onSubmit(value: string): void {

    let post: Post = new Post();
    post.dataInsrimento = this.myForm.controls['data'].value;
    post.titolo = this.myForm.controls['titolo'].value;
    post.testo = this.myForm.controls['testo'].value;
    post.userName = this.defUser;


    this.posts.push(post);
  }
  ngOnInit() {
  }

}
