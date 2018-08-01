import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService extends InMemoryDbService {

  createDb() {
    const heroes = [
      {id: 11, name: 'Kyande'},
      {id: 12, name: 'Michael'},
      {id: 13, name: 'John'},
      {id: 14, name: 'Jane'},
      {id: 15, name: 'windstorm'},
      {id: 16, name: 'Magma'},
      {id: 17, name: 'Tornado'},
      {id: 18, name: 'Narco'},
      {id: 19, name: 'Bombastic'},
      {id: 20, name: 'Fantastic'}
    ];
    return {heroes};
  }
}
