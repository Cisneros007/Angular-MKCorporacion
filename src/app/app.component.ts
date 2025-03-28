import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./encabezados/footer/footer.component";
import { HeaderComponent } from "./encabezados/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'MKCorporacion';


  imagePaths: string[] = [
    'assets/images/Logo.png',
    'assets/images/img2.png',
    'assets/images/img3.svg'
  ];




  ngOnInit() {
    this.loadScript('assets/js/jquery.min.js');
    this.loadScript('assets/js/jquery.backtotop.js');
    this.loadScript('assets/js/jquery.easypiechart.min.js');
    this.loadScript('assets/js/jquery.mobilemenu.js');
  }

  loadScript(scriptUrl: string) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);
  }
}
