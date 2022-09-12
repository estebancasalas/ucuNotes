import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './cards/Note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let cards = [
      {id: 1, city: "Montevideo", hour: "12", date: "2021-03-01"},
      {id: 2, city: "Lima", hour: "12", date: "2021-03-01"},
    ];
    return {cards};
  }

  genId(cards: Note[]): number {
    return cards.length > 0 ? Math.max(...cards.map(Note => Note.id)) + 1 : 0;
  }

  constructor() { }
}
