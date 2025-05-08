import { Component } from '@angular/core';
import { MapaLeafletComponent } from "../mapa-leaflet/mapa-leaflet.component";

@Component({
  selector: 'app-ubicanos',
  imports: [MapaLeafletComponent],
  templateUrl: './ubicanos.component.html',
  styleUrl: './ubicanos.component.css'
})
export class UbicanosComponent {
  banner = 'assets/images/nosotros-bg.jpeg';

}
