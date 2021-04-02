import { Component, OnInit } from '@angular/core';
import { Pet1 } from '../pet';
// import { PETS } from '../mock-dogs';
import { PetService } from '../pet.service';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  Pets?: Pet1[];
  selectedPet1?: Pet1;
  constructor(private petService: PetService) { }

getPets(): void {
  this.petService.getPets()
  .subscribe(pets => this.Pets = pets)
}

ngOnInit() {
  this.getPets();
}
  onSelect(pets: Pet1): void {
    this.selectedPet1 = pets;
  }
}