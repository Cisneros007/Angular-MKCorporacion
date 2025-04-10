import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { OportunidadLaboralComponent } from './components/oportunidad-laboral/oportunidad-laboral.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { EnviarCvComponent } from './components/enviar-cv/enviar-cv.component';
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'nosotros',component: NosotrosComponent},
  { path: 'laboral',component: OportunidadLaboralComponent},
  { path: 'contactanos',component: ContactanosComponent},
  { path: 'enviar',component: EnviarCvComponent},

];
