import { Injectable } from '@angular/core';
import { Pet1 } from './pet';
import { PETS } from './mock-pets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class PetService {
  getPets(): Observable<Pet1[]> {
    this.messageService.add('PetService: rounding up pets!');
    return of (PETS);
  }
  constructor(private messageService: MessageService) { }
}