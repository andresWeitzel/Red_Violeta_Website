import { Routes } from '@angular/router';
import { FormularioDenunciasComponent } from './formulario-denuncias/formulario-denuncias.component';
import { InicioComponent } from './inicio/inicio.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'formulario-denuncias', component: FormularioDenunciasComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
