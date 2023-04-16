import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  // Nell'elenco sono già presenti 3 clienti per testare il componente "elenco-clienti"

  clienti: Cliente[] = [
    new Cliente(1, {nome: 'Marco', cognome: 'Rossi'}),
    new Cliente(2, {nome: 'Paolo', cognome: 'Verdi'}),
    new Cliente(3, {nome: 'Luca', cognome: 'Bianchi'}),
  ];

  eventEmitter = new Subject<Cliente[]>();

  // Aggiunge un nuovo cliente all'elenco
  // Per ottenere l'elenco dei clienti è necessario effettuare un subscribbe ed eventEmitter 
  add(cliente: Cliente) {
    this.clienti.push(cliente);
    this.eventEmitter.next(this.clienti.slice());
  }

  // Per ottenere l'elenco dei clienti è necessario effettuare un subscribe ed eventEmitter 
  getAll() {
    this.eventEmitter.next(this.clienti.slice());
  }

  // Metodo da utilizzare per ottenere un id per un nuovo cliente
  get id():number {
    if (this.clienti.length == 0) {
      return 1;
    }
    else {
      return Math.max.apply(Math, this.clienti.map((c) => { return c.id})) + 1;
    }
  }

}
