import { Component, OnInit, Input } from '@angular/core';
import { Pet1 } from '../pet';
@Component({
  selector: 'app-pets-detail',
  templateUrl: './pets-detail.component.html',
  styleUrls: ['./pets-detail.component.css']
})
export class PetsDetailComponent implements OnInit {
  @Input() Pet1?: Pet1;
  constructor() { }
  ngOnInit(): void {
  }
}
