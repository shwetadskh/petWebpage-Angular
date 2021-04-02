import { Component, OnInit } from '@angular/core';
import {Pet1} from '../pet';
import { PETS } from '../mock-pets';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets = PETS;
  selectedPet1?: Pet1;
  constructor() { }

  ngOnInit(): void {
  }
    onSelect(pets: Pet1): void {
    this.selectedPet1 = pets;
  }
}
