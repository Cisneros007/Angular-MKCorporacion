import { Component } from '@angular/core';

@Component({
  selector: 'app-oportunidad-laboral',
  imports: [],
  templateUrl: './oportunidad-laboral.component.html',
  styleUrl: './oportunidad-laboral.component.css'
})
export class OportunidadLaboralComponent {

  vacantes= 'assets/images/vacantes.jpg';

  
  scrollToServices() {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
