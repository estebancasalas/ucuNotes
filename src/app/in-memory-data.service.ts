import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './cards/Note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let cards = [
      {'id':1, 'city':'Berlin', 'date':'2022-09-13', 'time':'12:00', 'text':'Generado Automaticamente'},
      {'id':2, 'city':'Madrid', 'date':'2022-09-13', 'time':'12:00', 'text':'Generado Automaticamente'},
      {'id':3, 'city':'Washington', 'date':'2022-09-13', 'time':'12:00', 'text':'Generado Automaticamente'},
      {'id':4, 'city':'Montevideo', 'date':'2022-09-13', 'time':'14:00', 'text':'Generado Automaticamente'}
    ];
    return {cards};
  }

  genId(cards: Note[]): number {
    return cards.length > 0 ? Math.max(...cards.map(Note => Note.id)) + 1 : 0;
  }
  
  constructor() { } 
}
