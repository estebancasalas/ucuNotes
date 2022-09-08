import { Component } from '@angular/core';
import {Note} from './cards/Note';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  noteParent : Note = {'id':1, 'city':'Montevideo', 'temp':14, 'date':'07/09/2022', 'time':'12:00', 'text':'Generado Automaticamente'};
  title='ucuNotes';


}
