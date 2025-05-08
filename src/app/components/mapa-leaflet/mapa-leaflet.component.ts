import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa-leaflet',
  templateUrl: './mapa-leaflet.component.html',
  styleUrls: ['./mapa-leaflet.component.css']
})
export class MapaLeafletComponent implements AfterViewInit {

  private map!: L.Map;

  private locations = [
    {
      name: "Cusco",
      coords: [-13.5186131, -71.97706],
      info: "Centro comercial Ima Sumac de 329"
    },
    {
      name: "Arequipa",
      coords: [-16.390753, -71.5461128],
      info: "Av Lima 100 esquina con Av Ejército, Edificio Nasya 2"
    },
    {
      name: "Huancayo",
      coords: [-12.0673, -75.2100],
      info: "Jr. Brasilia 375, San Carlos – Quinto Piso"
    },
    {
      name: "Lima",
      coords: [-12.0820, -77.0369],
      info: "Av. Arequipa 1860, Oficina 1610, Lince"
    }
  ];

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-12.0464, -77.0428], 6); // centrado en Perú

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.locations.forEach(loc => {
      L.marker(loc.coords as L.LatLngExpression)
        .addTo(this.map)
        .bindPopup(`<strong>${loc.name}</strong><br>${loc.info}`);
    });
  }
}
