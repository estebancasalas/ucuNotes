import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cities } from '../mockCities'
import { Note } from '../cards/Note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css']
})
export class AddEditModalComponent implements OnInit {

  @Output() changed  = new EventEmitter<Note>;
  @Input() id : string = "modal-agregar";
  ciudades : Array<string> = Object.keys(cities)
  private lastId: number = -1;
  editId: number = -1;
  constructor(private notesService: NotesService) {
  }
  ngOnInit(): void {
    this.notesService.getNotes().subscribe(notes => this.lastId = notes.length);
  }
  agregarNota() {
    let ciudad = (<HTMLInputElement>document.getElementById("CiudadAgregar")).value;
    let texto = (<HTMLInputElement>document.getElementById("textoAgregar")).value;
    let fecha = (<HTMLInputElement>document.getElementById("datePicker")).value;
    let hora = (<HTMLInputElement>document.getElementById("timePicker")).value;
    if (ciudad == "" || texto == "" || fecha == "" || hora == "") {
      alert("Por favor, complete todos los campos");
      return;
    } else {
      let nota: Note = {
        id: this.lastId + 1,
        city: ciudad,
        date: fecha,
        text: texto,
        time: hora
      }
      this.notesService.addNote(nota).subscribe(nota => this.changed.emit(nota));
      this.lastId++;
    }
    (<HTMLInputElement>document.getElementById("CiudadAgregar")).value = (<HTMLInputElement>document.getElementById("CiudadAgregar")).defaultValue;
    (<HTMLInputElement>document.getElementById("textoAgregar")).value = (<HTMLInputElement>document.getElementById("textoAgregar")).defaultValue;
    (<HTMLInputElement>document.getElementById("datePicker")).value = (<HTMLInputElement>document.getElementById("datePicker")).defaultValue;
    (<HTMLInputElement>document.getElementById("timePicker")).value = (<HTMLInputElement>document.getElementById("timePicker")).defaultValue;
    
  }
  editNote() {
    let ciudad = (<HTMLInputElement>document.getElementById("CiudadEditar")).value;
    let texto = (<HTMLInputElement>document.getElementById("textoEditar")).value;
    let fecha = (<HTMLInputElement>document.getElementById("datePickerEditar")).value;
    let hora = (<HTMLInputElement>document.getElementById("timePickerEditar")).value;
    if (ciudad == "" || texto == "" || fecha == "" || hora == "") {
      alert("Por favor, complete todos los campos");
      return;
    } else {
      let nota: Note = {
        id: this.lastId + 1,
        city: ciudad,
        date: fecha,
        text: texto,
        time: hora
      }
      this.notesService.updateNote(nota).subscribe(nota => this.changed.emit(nota));
      this.lastId++;
    }
    (<HTMLInputElement>document.getElementById("CiudadEditar")).value = (<HTMLInputElement>document.getElementById("CiudadEditar")).defaultValue;
    (<HTMLInputElement>document.getElementById("textoEditar")).value = (<HTMLInputElement>document.getElementById("textoEditar")).defaultValue;
    (<HTMLInputElement>document.getElementById("datePickerEditar")).value = (<HTMLInputElement>document.getElementById("datePickerEditar")).defaultValue;
    (<HTMLInputElement>document.getElementById("timePickerEditar")).value = (<HTMLInputElement>document.getElementById("timePickerEditar")).defaultValue;
  }
}
