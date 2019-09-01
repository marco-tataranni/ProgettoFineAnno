import { Component, OnInit, Input } from '@angular/core';
import {Oggetti} from '../mock-oggetti';
@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.css']
})
export class ObjectsListComponent implements OnInit {
   @Input() oggetti= Oggetti;
  constructor() { }

  ngOnInit() {
  }

}
