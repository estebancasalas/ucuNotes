import { Component, OnInit } from '@angular/core';
import { Note } from '../cards/Note';
import { NOTES } from '../cards/Mock-notes';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  noteParent : Note[] = NOTES;

  constructor() { }

  ngOnInit(): void {
  }

}
