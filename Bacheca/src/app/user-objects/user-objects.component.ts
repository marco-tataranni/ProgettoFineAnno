import { Component, OnInit, Input } from '@angular/core';
import {Oggetti} from '../mock-oggetti';
@Component({
  selector: 'app-user-objects',
  templateUrl: './user-objects.component.html',
  styleUrls: ['./user-objects.component.css']
})
export class UserObjectsComponent implements OnInit {
   @Input() oggetti= Oggetti;
  @Input() defUser:string;

  constructor() {


  }
  ngOnInit() {
  }
  controllo(a: string ):boolean{
    if(a==this.defUser){
      return true;
    }else{
      return false;
    }
  }

}
