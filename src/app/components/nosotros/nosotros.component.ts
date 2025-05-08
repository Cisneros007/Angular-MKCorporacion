import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  logo = 'assets/images/Logo.png';
  banner = 'assets/images/nosotros-bg.jpeg';
  bannerPG = 'assets/images/bannerPG.png';
  Crecimiento = 'assets/images/crecimiento.jpg';
  innovacion ='assets/images/innovacion.jpg';
  brujula = 'assets/images/brujula.jpg';




  CLima1 = 'assets/images/colaboradores/lima/Clima1.png';
  CLima2 = 'assets/images/colaboradores/lima/Clima2.png';
  CLima3 = 'assets/images/colaboradores/lima/Clima3.png';
  CLima4 = 'assets/images/colaboradores/lima/Clima4.png';
  CLima5 = 'assets/images/colaboradores/lima/Clima5.png';
  //
  Chuancayo1 = 'assets/images/colaboradores/huancayo/Chuancayo1.png';
  Chuancayo2 = 'assets/images/colaboradores/huancayo/Chuancayo2.png';
  Chuancayo3 = 'assets/images/colaboradores/huancayo/Chuancayo3.png';
  Chuancayo4 = 'assets/images/colaboradores/huancayo/Chuancayo4.png';
  Chuancayo5 = 'assets/images/colaboradores/huancayo/Chuancayo5.png';
  Chuancayo6 = 'assets/images/colaboradores/huancayo/Chuancayo6.png';
  //
  Ccuzco1 = 'assets/images/colaboradores/cuzco/Ccuzco1.png';
  Ccuzco2 = 'assets/images/colaboradores/cuzco/Ccuzco2.png';
  //
  Carequipa1 = 'assets/images/colaboradores/arequipa/Carequipa1.png';


  
  contador = 0;
  final = 100;
  duracion = 3000; 

  ngOnInit() {
    this.animarContador();
  }

  animarContador() {
    const incremento = this.duracion / this.final;
    const interval = setInterval(() => {
      this.contador++;
      if (this.contador >= this.final) {
        clearInterval(interval);
      }
    }, incremento);
  }
}