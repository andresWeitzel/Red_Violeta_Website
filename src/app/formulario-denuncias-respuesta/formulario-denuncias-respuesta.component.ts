import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FORWARD_CONTACTS } from '../formulario-denuncias/denuncia-config';

@Component({
  selector: 'app-formulario-denuncias-respuesta',
  imports: [RouterLink],
  templateUrl: './formulario-denuncias-respuesta.component.html',
  styleUrl: './formulario-denuncias-respuesta.component.css',
})
export class FormularioDenunciasRespuestaComponent {
  readonly contacts = FORWARD_CONTACTS;
}
