import { Component, OnInit, Input } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Post}from '../post';
import {Posts} from '../mock-post';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent implements OnInit {

   myForm: FormGroup;
   @Input()posts=Posts;

    constructor(fb:FormBuilder)
    {
      this.myForm=fb.group({
          'data':['', Validators.required],
          'titolo':['', Validators.required],
          'testo':['', Validators.required],
          'user':['', Validators.required],


      })
    }

     onSubmit(value: string): void {

    let post: Post = new Post();
    post.dataInsrimento = this.myForm.controls['data'].value;
    post.titolo = this.myForm.controls['titolo'].value;
    post.testo = this.myForm.controls['testo'].value;
    post.userName = this.myForm.controls['user'].value;


    this.posts.push(post);
  }
  ngOnInit() {


}
}
