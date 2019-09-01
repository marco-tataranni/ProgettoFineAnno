import { Component, OnInit, Input } from '@angular/core';
import {Utenti} from '../mock-utenti';
@Component({
  selector: 'app-view-utenti',
  templateUrl: './view-utenti.component.html',
  styleUrls: ['./view-utenti.component.css']
})
export class ViewUtentiComponent implements OnInit {
  @Input() utenti= Utenti;
  constructor() { }

  ngOnInit() {
  }

}
