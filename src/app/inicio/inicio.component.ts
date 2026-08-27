import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-inicio',
  imports: [CarrouselComponent, CardComponent, MapComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
