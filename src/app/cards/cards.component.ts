import { Component, Input, OnInit } from '@angular/core';
import {Note} from './Note';
import {NOTES} from './Mock-notes'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() note? :Note;
  constructor() { 
   }
  

  ngOnInit(): void {
  }

}
