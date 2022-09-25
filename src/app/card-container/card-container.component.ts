import { Component, OnInit } from '@angular/core';
import { Note } from '../cards/Note';
import { NotesService } from '../notes.service';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  noteParent? : Note[];

  constructor(private noteService:NotesService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => this.noteParent = notes);
  }

  onChanged(event: Note) {
    this.noteService.getNotes().subscribe(notes => this.noteParent = notes);
  }
}
