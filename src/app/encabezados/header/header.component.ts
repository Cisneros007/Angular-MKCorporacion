import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logo = 'assets/images/Logo.png';
  logoS = 'assets/images/LogoSinFondo.png';
  logoI ='assets/images/logo-iluminado.png'; 
  navigateToPage(select: HTMLSelectElement) {
    if (select.value) {
      window.location.href = select.value;
    }
  }
}

